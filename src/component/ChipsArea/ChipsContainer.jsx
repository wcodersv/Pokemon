import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const CustomChipsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    width: 484,
    alignItems: "center",
    rowGap: 10,
    columnGap: 6,
}));

export const ChipsContainer = ({ children }) => {
    return <CustomChipsContainer>{children}</CustomChipsContainer>
}



