import React, { useState, useEffect, useRef } from 'react';
import { Box, List, ListItem, ListItemText, Divider, Avatar, Badge, IconButton } from '@mui/material';
import { PushPin, Info } from '@mui/icons-material';
import { GoSidebarExpand, GoSidebarCollapse } from 'react-icons/go';
import SearchInput from './searchbar';

const ChatList = ({ chats, pinnedChats, onSelectChat, isSidebarVisible, onToggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPinnedChats, setFilteredPinnedChats] = useState([]);
  const [filteredAllChats, setFilteredAllChats] = useState([]);
  const [unrepliedCount, setUnrepliedCount] = useState(0);

  const handleSearchChange = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  const filterChats = (chats, searchTerm) => {
    if (!searchTerm) {
      return chats;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return chats.filter(chat =>
      chat.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      chat.messages.some(message => message.text.toLowerCase().includes(lowerCaseSearchTerm))
    );
  };

  const sortChatsByTimestamp = (chats) => {
    return chats.slice().sort((a, b) => {
      const lastMessageA = a.messages[a.messages.length - 1];
      const lastMessageB = b.messages[b.messages.length - 1];
      if (!lastMessageA || !lastMessageB) return 0;
      return new Date(lastMessageB.timestamp) - new Date(lastMessageA.timestamp);
    });
  };

  const getMessageCountAfterLastUserReply = (messages) => {
    let count = 0;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].sender === 'User') {
        break;
      }
      count++;
    }
    return count;
  };

  const calculateUnrepliedCount = (chats) => {
    return chats.reduce((count, chat) => {
      const lastMessage = chat.messages[chat.messages.length - 1];
      if (lastMessage && lastMessage.sender === 'Bot') {
        count++;
      }
      return count;
    }, 0);
  };
  

    useEffect(() => {
      console.log('pinnedChats:', pinnedChats); 
      console.log('chats:', chats); 
      const sortedAllChats = sortChatsByTimestamp(filterChats(chats, searchTerm)).filter(chat => !pinnedChats.some(pinnedChat => pinnedChat.id === chat.id));
      setFilteredAllChats(sortedAllChats);
      setUnrepliedCount(calculateUnrepliedCount(sortedAllChats));
    }, [chats, searchTerm, pinnedChats]);
  //does not update currently, when merging with websocket ensure it updates well
    useEffect(() => {
      const sortedPinnedChats = sortChatsByTimestamp(filterChats([...pinnedChats], searchTerm));
      setFilteredPinnedChats(sortedPinnedChats);
    }, [pinnedChats, searchTerm]);

  return (
    <Box 
      className={`relative h-full ${isSidebarVisible ? 'w-1/3' : 'w-[4rem]'} p-4 border-r border-gray bg-white overflow-hidden transition-all duration-300`}
      style={{ overflowX: 'hidden' }} 
    >
      {isSidebarVisible ? (
        <>
          <div className="flex justify-between items-center mb-4">
  <div className="flex items-center space-x-4">
    <IconButton onClick={onToggleSidebar}>
      < GoSidebarExpand size={24} title="Collapse ChatList" />
    </IconButton>
    <h1 className="text-xl font-semibold flex-grow">Chats ({unrepliedCount})</h1>
  </div>
  <div className="flex-shrink">
    <SearchInput onSearchChange={handleSearchChange} />
  </div>
</div>

          {filteredPinnedChats.length > 0 && (
            <>
              <div className="mb-2 flex items-center">
                <span className="text-lg font-medium">Pinned</span>
                <PushPin fontSize="small" className="ml-1" />
              </div>
              <Divider />
              <List>
                {filteredPinnedChats.map((chat) => (
                  <React.Fragment key={chat.id}>
                    <ListItem button onClick={() => onSelectChat(chat.id)} className="flex items-center">
                    <Avatar alt="User" className="p-0.5 mr-4" />
                      <ListItemText primary={chat.title} secondary={chat.messages[chat.messages.length - 1].text} />
                      <div className="ml-auto flex flex-col items-center">
                        <span className="text-sm">
                          {new Date(chat.messages[chat.messages.length - 1].timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                        </span>
                        <Badge badgeContent={getMessageCountAfterLastUserReply(chat.messages)} color="primary" className="mt-3" />
                      </div>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </>
          )}

          <div className="mb-2 mt-4 flex items-center">
            <span className="text-lg font-medium">All Chats</span>
            <Info fontSize="small" className="ml-1" />
          </div>
          <List>
            {filteredAllChats.map((chat) => (
              <React.Fragment key={chat.id}>
                <ListItem button onClick={() => onSelectChat(chat.id)} className="flex items-center">
                  <Avatar alt="User" className="p-0.5 mr-4" />
                  <ListItemText primary={chat.title} secondary={chat.messages[chat.messages.length - 1].text} />
                  <div className="ml-auto flex flex-col items-center">
                    <span className="text-sm">
                      {new Date(chat.messages[chat.messages.length - 1].timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </span>
                    <Badge badgeContent={getMessageCountAfterLastUserReply(chat.messages)} color="primary" className="mt-4" />
                  </div>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </>
      ) : (
        <div className="absolute top-2 left-2 flex items-center" style={{ width: 'auto', minWidth: '3rem', paddingRight: '.5rem' }}>
          <IconButton 
            onClick={onToggleSidebar} 
            className="h-12 w-12"
            style={{ zIndex: 10 }} 
            title="Expand ChatList"
          >
            <GoSidebarCollapse size={24} />
          </IconButton>
        </div>
      )}
    </Box>
  );
};

export default ChatList;