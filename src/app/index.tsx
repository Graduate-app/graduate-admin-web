import { RouterProvider } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import scTheme from '@theme';
import muiTheme from '../muiTheme';
import router from './router';


function App() {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <SCThemeProvider theme={scTheme}>
        <RouterProvider router={router} />
      </SCThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
