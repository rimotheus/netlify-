//new scenarios input
//scenarios input page - creating custom new scenarios
import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect, useRef } from 'react';
import { FaRegKeyboard } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import Layout from '../../../components/layout';
import Popupnew from '../../../components/popupnew';
import PopupCommunicationMode from '../../../components/popupcommunication';



export default function ScenarioInput() {
  const [showPopup, setShowPopup] = useState(false);
  const [keyboardActive, setKeyboardActive] = useState(true); 
  const [micActive, setMicActive] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [typingText, setTypingText] = useState('');

  const [practiceDuration, setPracticeDuration] = useState(null);
  const [communicationMode, setCommunicationMode] = useState(null);
  const [showCommunicationModePopup, setShowCommunicationModePopup] = useState(false);

  const recognitionRef = useRef(null);
  const interimTranscriptRef = useRef('');

  useEffect(() => {
    if (micActive) {
      startSpeechRecognition();
    } else {
      stopSpeechRecognition();
    }
  }, [micActive]);

  const startSpeechRecognition = () => {
    if (!recognitionRef.current) {
      recognitionRef.current = new webkitSpeechRecognition();
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true; 

      recognitionRef.current.onresult = (event) => {
        const { finalTranscript, interimTranscript } = Array.from(event.results)
          .slice(event.resultIndex)
          .reduce(
            (acc, result) => {
              if (result.isFinal) {
                acc.finalTranscript += result[0].transcript + ' ';
              } else {
                acc.interimTranscript += result[0].transcript + ' ';
              }
              return acc;
            },
            { finalTranscript: '', interimTranscript: '' }
          );

        setTranscript((prevTranscript) => prevTranscript + finalTranscript);
        interimTranscriptRef.current = interimTranscript; 
      };

      recognitionRef.current.onend = () => {
        if (micActive) {
          startSpeechRecognition(); // Restart recognition 
        }
      };
    }

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.error('Failed to start recognition:', error);
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handleStartClick = () => {
    const textareaContent = micActive ? transcript + interimTranscriptRef.current : typingText;
    console.log('Textarea content:', textareaContent);
    setShowPopup(true); 
  };

  // Function to handle the practice duration selection from the popup
const handleOptionClick = (minutes) => {
  setPracticeDuration(minutes); 
  console.log(`Selected ${minutes} minutes`);
  setShowPopup(false);
  setShowCommunicationModePopup(true); 
};

  // Function to handle the communication mode selection
  const handleCommunicationModeClick = (mode) => {
    setCommunicationMode(mode); 
    console.log(`Selected communication mode: ${mode}`);
    setShowCommunicationModePopup(false); 
  };

  const handleKeyboardClick = () => {
    if (!keyboardActive) {
      setKeyboardActive(true);
      setMicActive(false);
      stopSpeechRecognition(); // Stop speech recognition when switching to keyboard
    }
  };

  const handleMicClick = () => {
    if (!micActive) {
      setMicActive(true);
      setKeyboardActive(false);
    } else {
      setMicActive(false);
      stopSpeechRecognition(); // Stop speech recognition when turning off microphone
    }
  };

  const handleTypingChange = (event) => {
    setTypingText(event.target.value);
  };

  const handleClearClick = () => {
    setTranscript('');
    interimTranscriptRef.current = ''; 
  };

  return (
    <Layout gradient={true}>
      <Head>
        <title>Scenario Input</title>
      </Head>
      <div className="flex items-center justify-center h-full text-white">
        <div className="mt-20 text-center">
          <h1 className="text-6xl leading-tight max-w-3xl mx-auto">
            Hi, what would you like to talk about today?
          </h1>
          <div className="mt-10 flex items-center justify-center">
            <div className="relative w-full">
              <textarea
                placeholder={keyboardActive ? 'Type Here' : 'Speak Here'}
                className="text-xl border border-gray-300 px-12 py-2 w-full focus:outline-none text-black resize-none h-24 overflow-y-auto bg-gradient-to-r from-[#D9D9D9] via-[#E5E5E5] to-[#E5E5E5]"
                value={micActive ? transcript + interimTranscriptRef.current : typingText}
                onChange={handleTypingChange}
                readOnly={micActive} 
              />
              <div className="absolute bottom-2 right-2 flex items-center space-x-2 p-2">
                <button
                  className={`text-white ${keyboardActive ? 'bg-gray-400' : ''}`}
                  onClick={handleKeyboardClick}
                >
                  <FaRegKeyboard size={24} style={{ strokeWidth: 10 }} />
                </button>
                <button
                  className={`text-white ${micActive ? 'bg-gray-400' : ''}`}
                  onClick={handleMicClick}
                >
                  <FaMicrophone size={24} style={{ strokeWidth: 10 }} />
                </button>
                {micActive && (
                  <button
                    className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md"
                    onClick={handleClearClick}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              className="bg-index-blue text-white px-4 py-2 rounded-md w-60"
              onClick={handleStartClick}
            >
              Start
            </button>
          </div>
          <h2 className="mt-4">Or</h2>
          <div className="mt-4">
            <button className="bg-white text-index-blue-button px-4 py-2 rounded-md w-60">
              <Link href="/chats/new/scenarios">Explore Categories</Link>
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <Popupnew
          handleOptionClick={handleOptionClick}
          onClose={() => setShowPopup(false)}
        />
      )}
      {showCommunicationModePopup && (
        <PopupCommunicationMode
          handleCommunicationModeClick={handleCommunicationModeClick}
          onClose={() => setShowCommunicationModePopup(false)}
        />
      )}
    </Layout>
  );
}
  