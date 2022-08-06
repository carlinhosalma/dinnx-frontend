import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { Mapping } from './components/Mapping';
import theme from './themes/Dark';


function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Mapping />
    </MuiThemeProvider>
  );
}

export default App;
