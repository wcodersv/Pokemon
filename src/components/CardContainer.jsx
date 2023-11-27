import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const CustomCardContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: 500,
    alignItems: "center",
    gap: 12,
    alignSelf: 'stretch',
}));


export const CardContainer = ({children}) => {
    return <CustomCardContainer>{children}</CustomCardContainer>
}