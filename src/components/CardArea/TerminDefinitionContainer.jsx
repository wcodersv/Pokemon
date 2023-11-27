import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const CustomTerminDefinitionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '100%',
    width: 484,
    // flexDirection: 'column',
    // alignItems: "flex-start",
    // gap: 44,
    // padding: 44,
    background: '#000',
}));


export const TerminDefinitionContainer = ({ children }) => {
    return <CustomTerminDefinitionContainer>{children}</CustomTerminDefinitionContainer>
}
