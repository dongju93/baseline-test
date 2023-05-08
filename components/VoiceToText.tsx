"use client";

import { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';

interface VoiceToTextProps {
  onTextChange: (text: string) => void;
}

const VoiceToText = ({ onTextChange }: VoiceToTextProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleStartRecording = () => {
    setIsRecording(true);
    resetTranscript();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    onTextChange(transcript);
  };

  return (
    <div>
      <div>{transcript}</div>
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={handleStopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
    </div>
  );
};

export default VoiceToText;
