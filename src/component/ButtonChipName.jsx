import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButtonChipName = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.primary.main),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
    borderRadius: 44,
    background: '#1986EC',
    fontSize: 20,
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '100%',

    '&:hover': {
        borderRadius: 44,
        background: '#1986EC',
    },
}));


export const ButtonChipName = ({ text }) => {
    return <CustomButtonChipName>{text}</CustomButtonChipName>
}
