import React, { useState, useRef } from 'react';
import { IconButton, TextField, Box, Button } from '@mui/material';
import { PushPin, PushPinOutlined } from '@mui/icons-material';
import { RiBarChart2Fill } from 'react-icons/ri';
import { IoCall, IoLogoWechat } from 'react-icons/io5';
import { BiSolidSend } from 'react-icons/bi';
import Avatar from '@mui/material/Avatar';
import MicrophoneComponentWithUI from './MicrophoneComponentUI';

const ChatRoom = ({ chat, onSendMessage, onPinConversation, pinnedChats }) => {
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState('chat'); 
  const microphoneRef = useRef(null);

  const handleSendMessage = (msg) => {
    if (msg.trim()) {
      onSendMessage(msg);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(message);
    }
  };

  const handleModeToggle = () => {
    setMode(prevMode => (prevMode === 'chat' ? 'call' : 'chat'));
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const isPinned = pinnedChats.some(pinnedChat => pinnedChat.id === chat.id);

   return (
    <Box className="flex-grow border-l border-gray-300 flex flex-col p-2 bg-white text-white shadow-md">
      <Box className="flex justify-between items-center mb-4 p-4">
        <h1 className="text-black text-2xl">{chat.title}</h1>
        <Box className="flex items-center">
        <Button 
            variant="contained" 
            color="primary" 
            className="rounded-full ml-2"
            startIcon={<RiBarChart2Fill />}
          >
            Generate Report
          </Button>
          
          <IconButton onClick={() => onPinConversation(chat.id)}>
            {isPinned ? <PushPin /> : <PushPinOutlined />}
          </IconButton>
          
          <IconButton 
            onClick={handleModeToggle} 
            className="ml-2" 
            style={{ zIndex: 10 }} 
          >
            {mode === 'chat' ? <IoCall size={24} /> : <IoLogoWechat size={24} />}
          </IconButton>
        </Box>
      </Box>

      <Box className="flex flex-col flex-grow overflow-y-auto mb-4 bg-light-gray p-2 scroll-bar">
        {chat.messages.map((msg, index) => (
          <Box key={index} className="flex items-center mb-4">
            {msg.sender === 'Bot' && (
              <Avatar className="mr-2" alt="Bot Avatar" />
            )}
            <Box
              className={`p-3 rounded-lg ${msg.sender === 'Bot' ? 'bg-index-blue text-white' : 'bg-white text-index-blue'} ${msg.sender === 'Bot' ? 'ml-2' : 'ml-auto'}`}
              style={{
                maxWidth: '75%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '1rem'
              }}
            >
              <p className="flex-grow">{msg.text}</p>
              <span className={`text-xs text-opacity-70 ml-2 ${msg.sender === 'Bot' ? 'text-white' : 'text-index-blue'}`}>
                {formatTime(msg.timestamp)}
              </span>
            </Box>
            {msg.sender === 'User' && (
              <Avatar className="ml-2" alt="User Avatar" />
            )}
          </Box>
        ))}
      </Box>

      {mode === 'chat' ? (
        <Box className="flex items-center ">
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress} 
          placeholder="Type your message..."
        />
        <Box className="flex items-center ml-2">
          <IconButton 
            variant="contained" 
            color="primary" 
            onClick={() => handleSendMessage(message)} 
            className="bg-white text-index-blue"
          >
            <BiSolidSend size={24} />
          </IconButton>
        </Box>
      </Box>
        
      ) : (
        <MicrophoneComponentWithUI 
          ref={microphoneRef} 
          onTranscriptChange={setMessage} 
          onSendMessage={handleSendMessage} 
        />        
      )}
    </Box>
  );
};

export default ChatRoom;