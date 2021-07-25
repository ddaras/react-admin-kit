const initialColorMode = 'light';

const baseline = [0, 4, 8, 12, 16, 20, 24, 28, 32, 64, 128];

export type Modes = {
	light: 'light';
	dark: 'dark';
};

// Default Breakpoints
const breakpoints = ['40em', '52em', '64em'];
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)

export const fonts = {
	regular: 'OpenSans-Regular, Roboto, sans-serif',
	semiBold: 'OpenSans-SemiBold, Roboto, sans-serif',
	bold: 'OpenSans-Bold, Roboto, sans-serif'
};

// default fontSizes
const fontSizes = {
	sm: '14px',
	h1: '40px',
	h2: '32px',
	h3: '24px',
	h4: '16px',
	body: '16px',
	caption: '12px'
};

// default space for margin and padding
const space = baseline;

const lightModeColors: any = {
	white: '#fff',
	black: '#000',

	grey0: '#f8f9fa',
	grey1: '#f1f3f5',
	grey2: '#e9ecef',
	grey3: '#dee2e6',
	grey4: '#ced4da',
	grey5: '#adb5bd',
	grey6: '#868e96',
	grey7: '#495057',
	grey8: '#343a40',
	grey9: '#212529',

	blue0: '#e7f5ff',
	blue1: '#d0ebff',
	blue2: '#a5d8ff',
	blue3: '#74c0fc',
	blue4: '#4dabf7',
	blue5: '#339af0',
	blue6: '#228be6',
	blue7: '#1c7ed6',
	blue8: '#1971c2',
	blue9: '#1864ab',

	indigo0: '#f3f0ff',
	indigo1: '#e5dbff',
	indigo2: '#d0bfff',
	indigo3: '#b197fc',
	indigo4: '#9775fa',
	indigo5: '#845ef7',
	indigo6: '#7950f2',
	indigo7: '#7048e8',
	indigo8: '#6741d9',
	indigo9: '#5f3dc4',

	yellow0: '#fff9db',
	yellow1: '#fff3bf',
	yellow2: '#ffec99',
	yellow3: '#ffe066',
	yellow4: '#ffd43b',
	yellow5: '#fcc419',
	yellow6: '#fab005',
	yellow7: '#f59f00',
	yellow8: '#f08c00',
	yellow9: '#e67700',

	green0: '#ebfbee',
	green1: '#d3f9d8',
	green2: '#b2f2bb',
	green3: '#8ce99a',
	green4: '#69db7c',
	green5: '#51cf66',
	green6: '#40c057',
	green7: '#37b24d',
	green8: '#2f9e44',
	green9: '#2b8a3e',

	lime0: '#f4fce3',
	lime1: '#e9fac8',
	lime2: '#d8f5a2',
	lime3: '#c0eb75',
	lime4: '#a9e34b',
	lime5: '#94d82d',
	lime6: '#82c91e',
	lime7: '#74b816',
	lime8: '#66a80f',
	lime9: '#5c940d',

	danger0: '#fff5f5',
	danger1: '#ffe3e3',
	danger2: '#ffc9c9',
	danger3: '#ffa8a8',
	danger4: '#ff8787',
	danger5: '#ff6b6b',
	danger6: '#fa5252',
	danger7: '#f03e3e',
	danger8: '#e03131',
	danger9: '#c92a2a'
};

// colors
export const colors: any = {
	light: lightModeColors,
	dark: {
		...lightModeColors
	}
};

export default {
	breakpoints,
	colors: colors[initialColorMode],
	fonts,
	grid: {
		containerMaxWidth: {
			xs: '540px',
			sm: '720px',
			md: '960px',
			lg: '1136px',
			xl: '1280px'
		},
		gutterWidth: '16px',
		colCount: 12
	},
	fontSizes,
	lineHeights: {
		h1: '56px',
		h2: '40px',
		h3: '32px',
		h4: '24px',
		body: '24px',
		caption: '16px'
	},
	space,
	shadows: {
		none: 'none',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05);',
		md:
			'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
		lg:
			'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);'
	},
	radii: { none: 0, sm: 6, md: 8, lg: 12, xl: 24, rounded: '100rem' }
};
