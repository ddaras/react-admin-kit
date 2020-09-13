import { varianting } from './theming';

export const spacing = (props: any) => {
	const padding = varianting('size', 'size', {
		none: {
			default: 0
		},
		xs: {
			default: props.theme.values.spacing.default * 1 * props.sizescale
		},
		sm: {
			default: props.theme.values.spacing.default * 2 * props.sizescale
		},
		md: {
			default: props.theme.values.spacing.default * 3 * props.sizescale
		},
		lg: {
			default: props.theme.values.spacing.default * 4 * props.sizescale
		},
		xl: {
			default: props.theme.values.spacing.default * 5 * props.sizescale
		}
	});

	const customPaddingValue = padding(props);
	const customPadding = `${
		customPaddingValue - props.sizescale * 2
	}px ${customPaddingValue}px`;

	return {
		margin: props.m,
		padding: props.p || customPadding
	};
};
