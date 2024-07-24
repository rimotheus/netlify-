import React, { useState, } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import ChatList from '../../components/Chatlist';

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

const ChatOverview = () => {
  const router = useRouter();
  const { chatId } = router.query;
  const [chats, setChats] = useState(mockChats);
  const [pinnedChats, setPinnedChats] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleSelectChat = (chatId) => {
    router.push(`/chats/${chatId}`);
  };

  const handleSearchChange = (searchTerm) => {

  };

  const handleToggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState);
  };

  return (
    <Layout>
      <Head>
        <title>Chat Overview</title>
      </Head>
      <div className="flex flex-grow h-screen">
        <ChatList
          chats={chats}
          pinnedChats={pinnedChats}
          onSelectChat={handleSelectChat}
          searchTerm={''}
          onSearchChange={handleSearchChange}
          isSidebarVisible={isSidebarVisible}
          onToggleSidebar={handleToggleSidebar}
        />
      </div>
    </Layout>
  );
};

export default ChatOverview;