import React from 'react';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

const StyledImageContainer = styled('div')({
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 200,
    width: '100%',
    padding: '22px  100px',
});

const StyledImage = styled(CardMedia)({
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    objectFit: 'contain',
    height: '100%',
    width: '100%',
});

const ImageCard = ({ srcImg, altImg }) => {
    return (
        <StyledImageContainer>
            <StyledImage
                component="img"
                image={srcImg}
                alt={altImg}
            />
        </StyledImageContainer>
    )
};

export default ImageCard;
