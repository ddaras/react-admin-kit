import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { routes, AsyncPage, IRoute } from './routes';

import theme from '@/utilities/theme';

const GlobalStyle = createGlobalStyle`
	/* Reset CSS */
	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default margin */
	h1,
	h2,
	h3,
	h4,
	p,
	ul[class],
	ol[class],
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd {
		margin: 0;
		line-height: 1;
	}

	/* Set core body defaults */
	body, html {
		margin: 0;
	}
	body {
		min-height: 100vh;
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		line-height: 1.75;
		font-family: ${theme.typography.font.primary};
	}

	#root {
		min-height: 100vh;
	}

	/* Make images easier to work with */
	img {
		max-width: 100%;
		display: block;
	}

	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		margin: 0;
		padding: 0;
		border: 0;
		line-height: 1.25;

		&:focus {
			outline: 0;
		}
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

`;

const themeObject = {
	mode: 'light',
	size: 'default',
	values: theme
};

export const App = () => (
	<ThemeProvider theme={themeObject}>
		<GlobalStyle />
		<Router>
			<Switch>
				{routes.map((r: IRoute) => (
					<Route
						key={r.path}
						path={r.path}
						exact={r.exact}
						component={r.component}
					/>
				))}
				<Route component={() => <AsyncPage page="NotFound" />} />
			</Switch>
		</Router>
	</ThemeProvider>
);
