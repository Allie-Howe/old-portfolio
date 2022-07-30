import {useState} from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { NavBar } from './components/Navigation/NavBar';
import { theme } from './components/Styling/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box className="App">
        <h1>Vite + React</h1>
      </Box>
    </ThemeProvider>
  );
}
