import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

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
	primary: '#d35400',
	border: '#bdc3c7'
};

const Inner = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

const Page = props => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<Meta />
			<Header />
			<Inner>{props.children}</Inner>
		</>
	</ThemeProvider>
);

export default Page;
