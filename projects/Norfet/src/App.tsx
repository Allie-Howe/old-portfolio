import {useState} from 'react';
import {Box} from '@mui/material';
import {NavBar} from './components/Navigation/NavBar';

export default function App() {
  return (
    <>
      <NavBar />
      <Box className="App">
        <h1>Vite + React</h1>
      </Box>
    </>
  );
}
