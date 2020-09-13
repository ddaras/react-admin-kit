import { varianting } from './theming';

export const palette = (props: any) => {
	const backgroundColor = varianting('mode', 'kind', {
		default: {
			light: props.theme.values.palette.light.grey.light,
			dark: props.theme.values.palette.dark.grey.light
		},
		primary: {
			light: props.theme.values.palette.light.primary.default,
			dark: props.theme.values.palette.dark.primary.default
		},
		ghost: {
			light: props.theme.values.palette.light.grey.lightest,
			dark: props.theme.values.palette.dark.grey.darkest
		}
	});

	const color = varianting('mode', 'kind', {
		default: {
			light: props.theme.values.palette.light.grey.dark,
			dark: props.theme.values.palette.dark.grey.dark
		},
		primary: {
			light: props.theme.values.palette.light.grey.lightest,
			dark: props.theme.values.palette.dark.grey.lightest
		},
		ghost: {
			light: props.theme.values.palette.light.grey.dark,
			dark: props.theme.values.palette.dark.grey.light
		}
	});

	return { backgroundColor: backgroundColor(props), color: color(props) };
};
