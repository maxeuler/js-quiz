import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  *, *:after, *:before {
    box-sizing: inherit
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
	primary: '#d35400'
};

const Page = props => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<Header />
			{props.children}
		</>
	</ThemeProvider>
);

export default Page;
