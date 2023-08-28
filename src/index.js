import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import App from './app/App';
import { GlobalStyles } from './app/styles/GlobalStyles';
import GlobalTheme from './app/styles/GlobalTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={GlobalTheme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>
);
