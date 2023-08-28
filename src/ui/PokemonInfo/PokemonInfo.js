import React from 'react';
import { styled } from '@mui/material/styles';

const InfoContainer = styled('div')({
    color: ' #A0A0A0',
    fontFamily: 'Raleway',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
});

const PokemonInfo = () => {
    return (
        <InfoContainer>
            <p>Снялся в 78 сериях</p>
            <p>Id: 1</p>
            <p>height: 7</p>
            <p>attack: 49</p>
        </InfoContainer>
    );
};

export default PokemonInfo;
