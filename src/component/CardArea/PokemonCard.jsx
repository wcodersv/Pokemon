import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import { HeaderCard } from './HeaderCard';
import ImageCard from './ImageCard';
import PokemonInfo from './PokemonInfo';

const CustomCard = styled(Card)({
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: "flex-start",
    gap: 44,
    padding: 44,
    background: '#000',
});

const PokemonCard = ({ headerText, srcImg, altImg, numberEpisodes, numberId, numberHeight, numberAttack }) => {
    return (
        <CustomCard>
            <HeaderCard headerText={headerText} />
            <ImageCard srcImg={srcImg} altImg={altImg} />
            <PokemonInfo
                numberEpisodes={numberEpisodes}
                numberId={numberId}
                numberHeight={numberHeight}
                numberAttack={numberAttack}
            />
        </CustomCard>
    );
};

export default PokemonCard;
