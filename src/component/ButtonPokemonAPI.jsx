import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButtonPokemonAPI = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.primary.main),
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '112.682%',
    textTransform: 'uppercase',
    padding: 7,
    borderRadius: 0,
    border: '1px solid  #FFF',

    '&:hover': {
        border: '1px solid  #FFF',
    },
}));

export const ButtonPokemonAPI = ({ children }) => {
    return <CustomButtonPokemonAPI>{children}</CustomButtonPokemonAPI>
}