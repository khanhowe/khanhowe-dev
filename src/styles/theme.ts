import { createTheme } from '@mui/material/styles';

const createMyTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#CBE4DE' : '#1976d2',
      },
      secondary: {
        main: mode === 'light' ? '#dc004e' : '#0E8388',
      },
      background: {
        default: mode === 'light' ? '#F6F1E9' : '#000000',
      }
    },
  });
};

export default createMyTheme;