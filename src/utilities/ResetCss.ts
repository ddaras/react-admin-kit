import { createGlobalStyle } from 'styled-components';

import { fonts } from '../theme';

const ResetCSS = createGlobalStyle`
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
		font-family: ${fonts.primary};
		/* font-family: Camphor, Open Sans, Segoe UI, sans-serif; */
		min-height: 100vh;
		scroll-behavior: smooth;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		line-height: 1.75;
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

export default ResetCSS;
