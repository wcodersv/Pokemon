import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";

const CustomMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 1280,
  flexDirection: 'column',
  alignItems: 'center',
  gap: 54,
  padding: '0 150px',
  margin: '0 auto',
}));


export const MainContainer = ({ children }) => {
  return (
    <CustomMainContainer>
      {children}
    </CustomMainContainer>
  )
}