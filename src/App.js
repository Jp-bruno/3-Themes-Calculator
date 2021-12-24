import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme1 from './styles/themes/theme1';
import { useState } from 'react';
import MainWrapper from './components/mainWrapper';

function App() {
  const [theme, setTheme] = useState(theme1)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <MainWrapper changeTheme={setTheme}/>
      </div>  
    </ThemeProvider>
  );
}

export default App;
