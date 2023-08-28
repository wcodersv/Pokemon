import React from 'react';
import Typography from '@mui/material/Typography';

export const CustomH1 = ({ children }) => (
  <Typography variant="h1" sx={{
    color: '#A0A0A0',
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '100%',
    alignSelf: 'stretch',
    fontFamily: 'Raleway',
  }}
  >
    {children}
  </Typography>
);