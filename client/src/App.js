import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles';
import light from './themes/defaultTheme';
import Main from './pages/Main';
import Import from './pages/Import';
import TopBar from './components/TopBar';
import Products from './pages/Products';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home">
            <TopBar topText={'Home'} />
            <Main />
          </Route>
          <Route path="/import">
            <TopBar topText={'Import'} />
            <Import />
          </Route>
          <Route path="/products">
            <TopBar topText={'Products'} />
            <Products />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
