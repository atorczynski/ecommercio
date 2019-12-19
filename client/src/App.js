import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './pages/Login';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles';
import light from './themes/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
