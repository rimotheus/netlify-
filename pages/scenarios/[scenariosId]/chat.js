import Head from 'next/head';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import LoadingDot from '../../../components/loadingdot';
import Layout from '../../../components/layout';

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false); // New state

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add user message to chat log
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: 'user', message: inputValue.trim() }
    ]);

    
    simulateBotResponse(inputValue.trim());

    
    setInputValue('');
  };

  const simulateBotResponse = (message) => {
   
    setIsBotTyping(true);

    // Simulate delayed bot response
    setTimeout(() => {
      const botResponse = `Bot: Hello! You said "${message}"`;

      
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: 'bot', message: botResponse }
      ]);

      
      setIsBotTyping(false);
    }, 2000); 
  };

  return (
    <Layout>
      <Head>
        <title>Chat</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="fixed text-3xl font-bold mb-4">Chat</h1>

        <div className="p-4 max-h-80 overflow-y-auto mb-4">
          {chatLog.map((entry, index) => (
            <div key={index} className={`mb-4 flex ${entry.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {/* icon */}
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center ${entry.type === 'user' ? ' mr-2' : 'left-0 mr-2'}`}>
                  <span className="text-white font-bold">{entry.type === 'user' ? 'U' : 'B'}</span>
                </div>
              </div>
              {/* Text */}
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

        {/* input */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 w-12 h-12"
            >
              <FaPaperPlane className="w-5 h-5 text-black" />
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Chat;