import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles';
import light from './components/themes/theme';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles></GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
