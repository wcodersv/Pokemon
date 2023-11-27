import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const CustomCardHeader = styled(Typography)(({ theme }) => ({
  color: '#A0A0A0',
  fontSize: 48,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '100%',
  alignSelf: 'stretch',
  fontFamily: 'Raleway',
}));

export const HeaderCard = ({ headerText }) => {
  return (
    <Box>
      <CustomCardHeader variant="h1">
        {headerText}
      </CustomCardHeader>
    </Box>
  );
}
