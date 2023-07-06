import { jsx, Global, css } from '@emotion/react';

export const GlobalStylesComponent = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
      }
    `}
  />
);
