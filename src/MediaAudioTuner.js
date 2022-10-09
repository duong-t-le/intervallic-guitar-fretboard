import React from 'react';
import * as Pitchfinder from "pitchfinder";
import { Note } from "@tonaljs/tonal";

/*
  Code is heavily taken from https://github.com/dgvai/webaudio-pitch-tuner
*/

const audioContext = new window.AudioContext();
const analyserNode = audioContext.createAnalyser();
const BUFFER_SIZE = 2048
analyserNode.fftSize = BUFFER_SIZE;
const buffer = new Float32Array(BUFFER_SIZE);
//const buffer = new Uint8Array(BUFFER_SIZE);


const MediaAudioTuner = (props) => {
    const [source, setSource] = React.useState(null);
    const [isMicStarted, setMicStarted] = React.useState(false);
    const [clearNoteTimer, setClearNoteTimer] = React.useState(null);
    const pitchFinder = Pitchfinder.YIN({
        threshold: 0.3,
        sampleRate: 44100,
        probabilityThreshold: 0.4
    });

    //const pitchFinder = Pitchfinder.AMDF();

    const detectPitch = () => {
        analyserNode.getFloatTimeDomainData(buffer);
        //analyserNode.getByteTimeDomainData(buffer);

        const pitch = pitchFinder(buffer); // null if pitch cannot be identified
        if (pitch) {
            const note = Note.fromFreq(pitch);
            if (2 <= Note.octave(note) && Note.octave(note) <= 6) {
                //if (props.notePlayed !== note) {
                if (clearNoteTimer) {
                    clearNotePlayed();
                }
                console.log(`pitch: ${pitch} ${note}`)
                props.setNotePlayed(note);
                let clearNoteTimer = setInterval(clearNotePlayed, 500);
                setClearNoteTimer(clearNoteTimer);
                //}
            }

        }
    };
    setInterval(detectPitch, 1);

    const clearNotePlayed = () => {
        props.setNotePlayed('');
        setClearNoteTimer(null);
    }


    const startRecording = async () => {
        const input = await getMicInput();
        setMicStarted(true)
        console.log('Clicked start recording...');

        if (audioContext.state === "suspended") {
            await audioContext.resume();
        }

        setSource(audioContext.createMediaStreamSource(input));
    }

    const getMicInput = () => {
        return navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: false,
                autoGainControl: false,
                noiseSuppression: false,
                latency: 0,
            },
        });
    };

    React.useEffect(() => {
        if (source != null) {
            source.connect(analyserNode);
        }
    }, [source]);

    const stop = () => {
        source.disconnect(analyserNode);
        setMicStarted(false);
    };

    return (
        <div>
            {!isMicStarted ?
                <input type="button" value="Start Microphone" onClick={() => startRecording()} />
                :
                <input type="button" value="Stop Microphone" onClick={() => stop()} />
            }
        </div>
    );
}

export default MediaAudioTuner;