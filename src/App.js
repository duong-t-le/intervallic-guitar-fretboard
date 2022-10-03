import React from 'react';
import { transpose, simplify } from '@tonaljs/note';
import { Note } from "@tonaljs/tonal";
import Range from "@tonaljs/range";
import Collection from "@tonaljs/collection";
import { Fretboard } from 'react-canvas-fretboard';

import './App.css';

const ALL_INTERVALS = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'P5', 'm6', 'M6', 'm7', 'M7'];
const QUIZ_ITEMS = (() => {
  const ALL_NOTES = Collection.shuffle(Range.chromatic(["E2", "E5"], { sharps: true }));
  let li = [];
  for (let i = 0; i < ALL_NOTES.length; i++) {
    let d = {};
    for (let j = 0; j < ALL_INTERVALS.length; j++) {
      d[ALL_INTERVALS[j]] = Note.pitchClass(simplify(transpose(ALL_NOTES[i], ALL_INTERVALS[j])));
    }
    li.push(d);
  }

  console.log(JSON.stringify(li));
  return li;
})();



function App() {
  const [noteIndex, setNoteIndex] = React.useState(0);
  const [isCorrect, setCorrect] = React.useState(false);
  const [selectedInterval, setSelectedInterval] = React.useState('m3');

  function selectOption(option) {
    console.log(`selected ${option}`)
    setSelectedInterval(option)
  }

  function moveNextQuizItem() {
    setNoteIndex((noteIndex + 1) >= QUIZ_ITEMS.length ? 0 : noteIndex + 1);
    setCorrect(false);
  }

  function getSelectedNotes(noteIndex) {
    const answer = QUIZ_ITEMS[noteIndex];
    let results = [
      {
        note: answer['P1'],
        color: 'blue'
      }
    ];
    if (isCorrect) {
      results.push(
        {
          note: answer[selectedInterval],
          color: 'red'
        }
      )
    }
    return results;
  }

  function checkAnswer(e) {
    let answer = QUIZ_ITEMS[noteIndex];
    console.log(`${Note.chroma(answer[selectedInterval])} === ${Note.chroma(e.note.pc)}`);
    if (Note.chroma(answer[selectedInterval]) === Note.chroma(e.note.pc)) {
      setCorrect(true);
      let timer = setTimeout(() => { moveNextQuizItem() }, 1200);
    }
  }

  return (
    <>
      <h2>Note: {Note.pitchClass(QUIZ_ITEMS[noteIndex]['P1'])}</h2>
      <div>
        <fieldset>
          <legend>Interval Options</legend>
          {ALL_INTERVALS.map((option, i) => {
            return (
              <>
                <span>
                  <input name="intervalSelection"
                    type="radio"
                    key={option}
                    value={option}
                    checked={option === selectedInterval}
                    onChange={() => selectOption(option)}>
                  </input><label>{option}</label>
                </span>
              </>
            );
          })}
        </fieldset>
      </div>
      {<input type="button" onClick={() => moveNextQuizItem()} value="Change" />}

      <div className="App">
        <Fretboard
          onFretboardClick={(e, note, string) => checkAnswer(e)}
          selectedNotes={getSelectedNotes(noteIndex)}
          selectedNotesOct={false}
          displayNoteName={false}
          darkMode={true}
        />
      </div>
      <div>
        <fieldset>
          <legend>Audio Options</legend>
        </fieldset>
      </div>
    </>
  );
}

export default App;