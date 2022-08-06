import React from 'react';
import { StreamChat } from 'stream-chat';
import {ChannelSearch, Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';


import {ChannelContainer , ChannelListContainer , Auth } from './Components';
import './App.css';
const apiKey='fa7hhya3trgk';
const client=StreamChat.getInstance(apiKey);
const authToken = false;
function App() {

  if(!authToken) return <Auth />

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer 
        />
        <ChannelContainer
        />
        

      </Chat>
      
    </div>
  );
}

export default App;
