import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const TerminDefinitionArea = styled(Box)(({ theme }) => ({
    display: 'flex',
    height:'100%',
    width: 484,
    flexDirection: 'column',
    alignItems: "flex-start",
    gap: 44,
    padding: 44,
    background: '#000',
}));
