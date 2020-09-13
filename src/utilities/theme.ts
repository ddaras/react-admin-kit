// colors
const lightColors = {
	primary: {
		lightest: '#bbdefb',
		light: '#64b5f6',
		default: '#2196f3',
		dark: '#1976d2',
		darkest: '#0d47a1'
	},
	background: {
		default: '#fff'
	},
	border: {
		default: '#ededed'
	},
	grey: {
		lightest: '#fff',
		light: '#ededed',
		default: '#ccc',
		dark: '#424242',
		darkest: '#000'
	}
};

const darkColors = {
	primary: lightColors.primary,
	background: {
		default: '#000'
	},
	border: {
		default: '#ccc'
	},
	grey: lightColors.grey
};

const palette = {
	light: lightColors,
	dark: darkColors
};

// shapes
const shape = {
	none: 0,
	xs: 1,
	sm: 2,
	md: 4,
	lg: 6,
	xl: 8
};

// elevation
const lightElevations = {
	xs:
		'0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
	sm:
		'0px 2px 2px -1px rgba(0,0,0,0.2),0px 1px 3px 0px rgba(0,0,0,0.14),0px 2px 4px 0px rgba(0,0,0,0.12)',
	md:
		'0px 2px 3px -2px rgba(0,0,0,0.2),0px 1px 4px 0px rgba(0,0,0,0.14),0px 1px 4px 0px rgba(0,0,0,0.12)',
	lg:
		'0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'
};

const darkElevations = {
	xs:
		'0px 2px 1px -1px rgba(255,255,255,0.2),0px 1px 1px 0px rgba(255,255,255,0.14),0px 1px 3px 0px rgba(255,255,255,0.12)',
	sm:
		'0px 2px 2px -1px rgba(0,0,0,0.2),0px 1px 3px 0px rgba(0,0,0,0.14),0px 2px 4px 0px rgba(0,0,0,0.12)',
	md:
		'0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
	lg:
		'0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)'
};

const elevation = { light: lightElevations, dark: darkElevations };

// typography
const font = {
	primary: '"Roboto", "Helvetica", "Arial", sans-serif'
};

const fontSize = {
	sm: '12px',
	md: '14px',
	lg: '24px'
};

const typography = {
	font,
	fontSize
};

// transition
const transition = {
	easing: {
		easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
		easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
		easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
		sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
	},
	duration: {
		shortest: 150,
		shorter: 200,
		short: 250,
		standard: 300,
		complex: 375
	}
};

export default {
	palette,
	spacing: {
		default: 4
	},
	shape,
	elevation,
	typography,
	transition
};
