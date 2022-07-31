import {useState} from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { NavBar } from './components/Navigation/NavBar';
import { theme } from './components/Styling/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routes.map(({component: Component, name, path}, index) =>
            <Route key={index} path={path} element={<Component/>} />
          )}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
