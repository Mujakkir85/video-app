//import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import { Box } from '@mui/material';


const App = () => {
  return (
    <Box sx={{backgroundColor: '#000', color:'#fff'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>} />  
      </Routes>
    </Box>
  );
};

export default App;