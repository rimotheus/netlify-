import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { IconButton, TextField, Box } from '@mui/material';
import { HiMiniMicrophone } from 'react-icons/hi2';
import { BiSolidSend } from 'react-icons/bi';
import { IoTrashBin } from 'react-icons/io5'; // Import the bin icon

const MicrophoneComponentWithUI = forwardRef(({ onTranscriptChange, onSendMessage }, ref) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.webkitSpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    }
  }, []);

  useImperativeHandle(ref, () => ({
    startRecording: () => startRecording(),
    stopRecording: () => stopRecording(),
  }));

  const startRecording = () => {
    if (window.webkitSpeechRecognition) {
      setIsRecording(true);
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.maxAlternatives = 1;

      let tempTranscript = "";

      recognitionRef.current.onresult = (event) => {
        const { finalTranscript, interimTranscript } = Array.from(event.results)
          .slice(event.resultIndex)
          .reduce(
            (acc, result) => {
              if (result.isFinal) {
                acc.finalTranscript += result[0].transcript;
              } else {
                acc.interimTranscript += result[0].transcript;
              }
              return acc;
            },
            { finalTranscript: tempTranscript, interimTranscript: "" }
          );

        tempTranscript = finalTranscript; // Update tempTranscript with the final part
        setTranscript(finalTranscript + interimTranscript);
      };

      recognitionRef.current.onspeechend = () => {
        // Avoid auto reset
      };

      recognitionRef.current.onend = () => {
        // Restart recognition on end to handle long pauses
        if (isRecording) {
          recognitionRef.current.start();
        }
      };

      recognitionRef.current.start();
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      setTranscript('');
    }
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handleTranscriptChange = (newTranscript) => {
    setTranscript(newTranscript);
    onTranscriptChange(newTranscript);
  };

  const handleSendMessage = () => {
    if (transcript.trim()) {
      onSendMessage(transcript);
      stopRecording();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box className="flex items-center w-full">
      <IconButton
        className="bg-white text-index-blue"
        onClick={() => {
          if (isRecording) {
            stopRecording();
          } else {
            startRecording();
          }
        }}
      >
        {isRecording ? <IoTrashBin size={24} /> : <HiMiniMicrophone size={24} />}
      </IconButton>
      <TextField
        variant="outlined"
        fullWidth
        value={transcript}
        onChange={(e) => handleTranscriptChange(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Transcript..."
        className="mx-2"
        InputProps={{
          readOnly: true,
          endAdornment: isRecording && (
            <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
          ),
        }}
      />
      <IconButton
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        className="bg-white text-index-blue"
      >
        <BiSolidSend size={24} />
      </IconButton>
    </Box>
  );
});

export default MicrophoneComponentWithUI;