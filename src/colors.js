import { ThemeProvider, createTheme } from '@mui/material/styles';
const Color = createTheme({
    palette: {
        primary: {
          main: '#456',
        },
        red:{
            main:"#732",
        },
        white:{
          main:"#fff"
        }
      },
});

export default Color;