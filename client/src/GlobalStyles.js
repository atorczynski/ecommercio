import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 12px;
          margin: 0px;
          background: ${theme.color.background};
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyles;
