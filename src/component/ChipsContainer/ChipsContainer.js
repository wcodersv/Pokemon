import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const ChipsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    width: 484,
    alignItems: "center",
    rowGap: 10,
    columnGap: 6,
}));
