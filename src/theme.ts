const initialColorMode = 'light';

const baseline = [0, 4, 8, 12, 16, 20, 24, 28, 32];

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
	primary: 'Roboto'
};

// default fontSizes
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

// default space for margin and padding
const space = baseline;

const lightModeColors = {
	white: '#fff',
	black: '#000',
	text: '#222',
	background: '#fff',
	border: '#f1f1f1',
	borderfocus: '#dedede',
	lightprimary: '#b197fc',
	midprimary: '#845ef7',
	primary: '#7048e8',
	secondary: '#00a',
	lightgray: '#fafafa',
	midgray: '#777',
	gray: '#eee'
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
	fontSizes,
	space,
	shadows: [
		'none',
		'0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		'0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
		'0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
		'0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
		'0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
		'0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
		'0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
		'0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
		'0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)'
	],
	radii: baseline
};
