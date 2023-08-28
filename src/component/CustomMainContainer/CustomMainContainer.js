import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const CustomMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 1280,
  flexDirection: 'column',
  alignItems: 'center',
  gap: 54,
  // backgroundColor: '#cfe8fc', // удалить
  padding: '0 150px',
  margin: '0 auto',
}));
