import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from '../assets/fonts/OpenSans-Regular.woff';
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf';
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf';

import theme from '../theme';

export const GlobalFonts = createGlobalStyle`

	@font-face {
		font-family: 'OpenSans-Regular';
		src: url(${OpenSansRegular});
	}

	@font-face {
		font-family: 'OpenSans-Bold';
		src: url(${OpenSansBold});
	}

	@font-face {
		font-family: 'OpenSans-SemiBold';
		src: url(${OpenSansSemiBold});
	}

`;

export const GlobalStyles = createGlobalStyle`

	#root {
		min-height: 100vh;
	}

	body {
		color: ${theme.colors.grey8};
		font-family: ${theme.fonts.regular};
		font-size: ${theme.fontSizes.body};
		line-height: ${theme.lineHeights.body};
	}

	h1, h2, h3, h4 {
		font-family: ${theme.fonts.bold};
	}

	h1 {
		font-size: ${theme.fontSizes.h1};
		line-height: ${theme.lineHeights.h1};
	}

	h2 {
		font-size: ${theme.fontSizes.h2};
		line-height: ${theme.lineHeights.h2};
	}

	h3 {
		font-size: ${theme.fontSizes.h3};
		line-height: ${theme.lineHeights.h3};
	}

	h4 {
		font-size: ${theme.fontSizes.h4};
		line-height: ${theme.lineHeights.h4};
	}

	small {
		color: ${theme.colors.grey6};
		font-family: ${theme.fonts.semiBold};
		font-size: ${theme.fontSizes.caption};
		line-height: ${theme.lineHeights.caption};
	}

	label {
		color: ${theme.colors.grey6};
		font-family: ${theme.fonts.semiBold};
		font-size: ${theme.fontSizes.caption};
		line-height: ${theme.lineHeights.caption};
		margin-bottom: ${theme.space[1]}px;
	}

	button, [role=button] {
		font-family: ${theme.fonts.bold};
		font-size: ${theme.fontSizes.body};
		line-height: ${theme.lineHeights.body};
	}

	input, textarea {
		font-family: ${theme.fonts.regular};
		font-size: ${theme.fontSizes.body};
		line-height: ${theme.lineHeights.body};
	}

	input::placeholder, textarea::placeholder {
		color: ${theme.colors.grey4};
	}

	a {
		color: ${theme.colors.grey8};

		&:hover {
			color: ${theme.colors.grey9};
		}
	}

`;

export const ResetCSS = createGlobalStyle`
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
	}

	/* Set core body defaults */
	body, html {
		margin: 0;
	}
	html {
    font-size: 100%;
	}
	body {
		min-height: 100vh;
		scroll-behavior: smooth;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
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
