//chatid page
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/layout';
import ChatList from '../../components/Chatlist';
import ChatRoom from '../../components/Chatroom';

const mockChats = [
  {
    id: 1,
    title: 'Chat 1',
    messages: [
      { sender: 'User', text: 'Hello!', timestamp: '2024-07-01 10:00' },
      { sender: 'Bot', text: 'Hi there!', timestamp: '2024-07-01 10:01' },
    ],
  },
  {
    id: 2,
    title: 'Chat 2',
    messages: [
      { sender: 'User', text: 'How are you?', timestamp: '2024-07-02 11:00' },
      { sender: 'Bot', text: 'I am good, thank you!', timestamp: '2024-07-02 11:01' },
    ],
  },
];

const ChatPage = () => {
  const router = useRouter();
  const { chatId } = router.query;
  
  const [chats, setChats] = useState(mockChats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [pinnedChats, setPinnedChats] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    if (chatId) {
      const chat = chats.find(c => c.id === parseInt(chatId));
      setSelectedChat(chat);
    }
  }, [chatId, chats]);

  const handleSendMessage = (message) => {
    const newChats = chats.map(chat =>
      chat.id === selectedChat.id
        ? {
            ...chat,
            messages: [...chat.messages, { sender: 'User', text: message, timestamp: new Date().toLocaleString() }],
          }
        : chat
    );
    setChats(newChats);
  };

  const handlePinConversation = (chatId) => {
    const chatToPin = chats.find(chat => chat.id === chatId);
    const isAlreadyPinned = pinnedChats.some(chat => chat.id === chatId);

    if (isAlreadyPinned) {
      setPinnedChats(pinnedChats.filter(chat => chat.id !== chatId));
    } else {
      setPinnedChats([...pinnedChats, chatToPin]);
    }
  };

  const handleSearchChange = (searchTerm) => {
    // Handle search change
  };

  const handleToggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState);
  };

  return (
    <Layout>
      <Head>
        <title>Chat {selectedChat ? selectedChat.title : ''}</title>
      </Head>
      <div className="flex flex-grow h-screen">
        <ChatList
          chats={chats}
          pinnedChats={pinnedChats}
          onSelectChat={(id) => router.push(`/chats/${id}`)}
          searchTerm={''}
          onSearchChange={handleSearchChange}
          isSidebarVisible={isSidebarVisible}
          onToggleSidebar={handleToggleSidebar}
        />
        {selectedChat && (
          <ChatRoom
            chat={selectedChat}
            onSendMessage={handleSendMessage}
            onClose={() => router.push('/chats')}
            onPinConversation={handlePinConversation}
            pinnedChats={pinnedChats}
          />
        )}
      </div>
    </Layout>
  );
};

export default ChatPage;