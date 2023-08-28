import React from 'react';
import { styled } from '@mui/system';

const StyledImageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: 12,
});

const StyledImage = styled('img')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
    padding: '22px  150px',
    // alignSelf: 'stretch',
    alignItems: 'center',
    background: 'red',
});

const CustomImage = ({ src, alt }) => (
    <StyledImageContainer>
        <StyledImage src={src} alt={alt} />
    </StyledImageContainer>
);

export default CustomImage;
