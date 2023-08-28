import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const CardContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: 500,
    alignItems: "center",
    gap: 12,
    alignSelf: 'stretch',
}));
