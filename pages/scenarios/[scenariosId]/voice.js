import Head from 'next/head';
import { useState, useRef } from 'react';
import Layout from '../../../components/layout';
import LoadingDot from '../../../components/loadingdot';
import MicrophoneComponent from '../../../components/MicrophoneComponent'; 

const Voice = () => {
  const [chatLog, setChatLog] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");

  const microphoneRef = useRef(null);

  const handleTranscriptChange = (newTranscript) => {
    setTranscript(newTranscript);

    if (newTranscript) {
      // Add user message to chat log
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: 'user', message: newTranscript }
      ]);

      
      simulateBotResponse(newTranscript);
    }
  };

  const simulateBotResponse = (message) => {
    setIsBotTyping(true);

    setTimeout(() => {
      const botResponse = `Bot: Hello! You said "${message}"`;

      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: 'bot', message: botResponse }
      ]);

      setIsBotTyping(false);
    }, 2000);
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      microphoneRef.current.startRecording();
    } else {
      microphoneRef.current.stopRecording();
    }
  };

  return (
    <Layout>
      <Head>
        <title>Chat</title>
      </Head>
      <div className="container mx-auto  flex flex-col">
        {/* Chat Room */}
        <div className="w-full p-4 flex-grow overflow-y-auto mb-4">
          <h1 className="text-3xl font-bold mb-4">Voice Chat</h1>

          {chatLog.map((entry, index) => (
            <div key={index} className={`mb-4 flex ${entry.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center ${entry.type === 'user' ? 'right-0 ml-2' : 'left-0 mr-2'}`}>
                  <span className="text-white font-bold">{entry.type === 'user' ? 'U' : 'B'}</span>
                </div>
              </div>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${entry.type === 'user' ? 'bg-white text-gray-800 self-end' : 'bg-white text-gray-800 self-start'}`}>
                {entry.message}
              </div>
            </div>
          ))}
          {isBotTyping && (
            <div className="flex justify-start mb-4">
              <LoadingDot />
            </div>
          )}
        </div>

        {/* Recording Component */}
        <div className="w-full flex  items-center justify-center">
          {isRecording ? (
            <button
              onClick={handleToggleRecording}
              className="mt-10 m-auto flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full w-20 h-20 focus:outline-none"
            >
              <svg
                className="h-12 w-12"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleToggleRecording}
              className=" m-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full w-10 h-10 focus:outline-none"
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
              >
                <path
                  fill="currentColor"
                  d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                />
              </svg>
            </button>
          )}
        </div>
        <MicrophoneComponent ref={microphoneRef} onTranscriptChange={handleTranscriptChange} />
      </div>
    </Layout>
  );
};

export default Voice;