import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from '../src/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import light from '../src/themes/defaultTheme';

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <Router>{storyFn()}</Router>
  </ThemeProvider>
);
addDecorator(GlobalStyleDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
