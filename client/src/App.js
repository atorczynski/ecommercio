import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/Login';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from './GlobalStyles';
import light from './themes/defaultTheme';
import Main from './pages/Main';
import Import from './pages/Import';
import TopBar from './components/menu/TopBar';
import Products from './pages/Products';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <GlobalStyles />
        <TopBar />
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/import">
            <Import />
          </Route>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
