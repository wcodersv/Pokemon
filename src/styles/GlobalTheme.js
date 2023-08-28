import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
    typography: {
        fontFamily: [
            'Raleway',
            'sans-serif',
        ].join(','),
    },
});

export default globalTheme;