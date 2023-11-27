import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import App from './app/App.jsx';
import { GlobalStyles } from './styles/GlobalStyles.js';
import GlobalTheme from './styles/GlobalTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={GlobalTheme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
);
