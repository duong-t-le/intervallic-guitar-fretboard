import React from 'react';
import { transpose, simplify } from '@tonaljs/note';
import { Note } from "@tonaljs/tonal";
import Range from "@tonaljs/range";
import Collection from "@tonaljs/collection";
import { Fretboard } from 'react-canvas-fretboard';

import MediaAudioTuner from './MediaAudioTuner';

import './App.css';

const ALL_INTERVALS = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'P5', 'm6', 'M6', 'm7', 'M7'];
const QUIZ_ITEMS = (() => {
  const ALL_NOTES = Collection.shuffle(Range.chromatic(["E2", "E5"], { sharps: true }));
  let li = [];
  for (let i = 0; i < ALL_NOTES.length; i++) {
    let d = {};
    for (let j = 0; j < ALL_INTERVALS.length; j++) {
      d[ALL_INTERVALS[j]] = (ALL_INTERVALS[j] === 'P1') ?
        Note.get(simplify(transpose(ALL_NOTES[i], ALL_INTERVALS[j]))).name : // get note with octave for P1
        Note.pitchClass(simplify(transpose(ALL_NOTES[i], ALL_INTERVALS[j])));
    }
    li.push(d);
  }

  //console.log(JSON.stringify(li));
  return li;
})();

function App() {
  const [noteIndex, setNoteIndex] = React.useState(0);
  const [isCorrect, setCorrect] = React.useState(false);
  const [useRandomInterval, setUseRandomInterval] = React.useState(false);
  const [selectedInterval, setSelectedInterval] = React.useState('m3');
  const [notePlayed, setNotePlayed] = React.useState(null);


  function selectInteralOption(e, option) {
    console.log(`${e} -> ${option}`)
    setSelectedInterval(option)
    //if (e) e.preventDefault();
  }

  function moveNextQuizItem() {
    setCorrect(false);

    if (useRandomInterval) {
      selectInteralOption(null, ALL_INTERVALS[Math.floor(Math.random() * ALL_INTERVALS.length)]);
    }
    setNoteIndex((noteIndex + 1) >= QUIZ_ITEMS.length ? 0 : noteIndex + 1);
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
    if (notePlayed) {
      results.push(
        {
          note: notePlayed,
          color: 'yellow'
        }
      )
    }
    return results;
  }

  function checkAnswer(e) {
    let answer = QUIZ_ITEMS[noteIndex];
    if (Note.chroma(answer[selectedInterval]) === Note.chroma(e.note.pc)) {
      setCorrect(true);
      setTimeout(() => {
        moveNextQuizItem()
      }, 700);
    }
  }

  const toggleUseRandomInterval = () => {
    const newValue = !useRandomInterval;
    setUseRandomInterval(newValue);
    if (newValue) {
      moveNextQuizItem();
    }
  }

  return (
    <>
      <h1>Note: {Note.pitchClass(QUIZ_ITEMS[noteIndex]['P1'])} Interval: {selectedInterval}</h1>
      <div>
        <fieldset>
          <legend>Interval Options</legend>
          {ALL_INTERVALS.map((option, i) => {
            return (
              <>
                <span className="intervalOption">
                  <input name="intervalSelection"
                    type="radio"
                    key={option}
                    value={option}
                    checked={option === selectedInterval}
                    onChange={(e) => selectInteralOption(e, option)}>
                  </input><label>{option}</label>
                </span>
              </>
            );
          })}
          <span className="intervalOption">
            <input type="checkbox" name="randomIntervalInput" checked={useRandomInterval} onChange={() => toggleUseRandomInterval()} /><label>Random</label>
          </span>
          {<input type="button" onClick={() => moveNextQuizItem()} value="Change Note" />}
        </fieldset>
      </div>

      <div className="App">
        <Fretboard
          onFretboardClick={(e, note, string) => checkAnswer(e, note, string)}
          selectedNotes={getSelectedNotes(noteIndex)}
          selectedNotesOct={false}
          displayNoteName={false}
          darkMode={true}
        />
      </div>
      <div>
        <fieldset>
          <legend>Audio Options</legend>
          <MediaAudioTuner setNotePlayed={setNotePlayed} />
        </fieldset>
      </div>
    </>
  );
}

export default App;