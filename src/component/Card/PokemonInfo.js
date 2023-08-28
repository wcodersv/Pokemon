import React from 'react';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

const CustomCardContent = styled(CardContent)({
    padding: 0,
    width: '100%',
});

const CustomTypography = styled(Typography)({
    color: ' #A0A0A0',
    fontFamily: 'Raleway',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%',
});

const PokemonInfo = ({numberEpisodes,numberId, numberHeight, numberAttack }) => {
    return (
        <CustomCardContent>
            <CustomTypography variant="body1">Снялся в {numberEpisodes} сериях</CustomTypography>
            <CustomTypography variant="body1">Id: {numberId}</CustomTypography>
            <CustomTypography variant="body1">height: {numberHeight}</CustomTypography>
            <CustomTypography variant="body1">attack: {numberAttack}</CustomTypography>
        </CustomCardContent>
    );
};

export default PokemonInfo;
