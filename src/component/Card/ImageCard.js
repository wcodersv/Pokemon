import React from 'react';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

const StyledImageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: 12,
});

const StyledImage = styled(CardMedia)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
    padding: '22px  150px',
    // alignSelf: 'stretch',
    alignItems: 'center',
    background: 'red',
});

const ImageCard = ({ srcImg, altImg }) => {
    return (
        <StyledImageContainer>
            <StyledImage component="img" image={srcImg} alt={altImg} height={200} />
        </StyledImageContainer>
    )
};

export default ImageCard;
