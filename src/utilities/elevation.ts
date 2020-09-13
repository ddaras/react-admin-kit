import { varianting } from '@/utilities/theming';

const getValues = (props: any) => {
	return {
		none: {
			light: 'none',
			dark: 'none'
		},
		xs: {
			light: props.theme.values.elevation.light.xs,
			dark: props.theme.values.elevation.dark.xs
		},
		sm: {
			light: props.theme.values.elevation.light.sm,
			dark: props.theme.values.elevation.dark.sm
		},
		md: {
			light: props.theme.values.elevation.light.md,
			dark: props.theme.values.elevation.dark.md
		},
		lg: {
			light: props.theme.values.elevation.light.lg,
			dark: props.theme.values.elevation.dark.lg
		},
		xl: {
			light: props.theme.values.elevation.light.xl,
			dark: props.theme.values.elevation.dark.xl
		}
	};
};

export const elevation = (props: any) => {
	const boxShadow = varianting('mode', 'elevation', getValues(props));

	return { boxShadow: boxShadow(props) };
};

export const hoverElevation = (props: any) => {
	const boxShadow = varianting('mode', 'hoverElevation', getValues(props));

	return { boxShadow: boxShadow(props) };
};

export const activeElevation = (props: any) => {
	const boxShadow = varianting('mode', 'activeElevation', getValues(props));

	return { boxShadow: boxShadow(props) };
};

export const focusElevation = (props: any) => {
	const boxShadow = varianting('mode', 'focusElevation', getValues(props));

	return { boxShadow: boxShadow(props) };
};
