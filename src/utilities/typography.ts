import { varianting } from './theming';

export const typography = (props: any) => {
	const fontSize = varianting('size', 'textsize', {
		sm: {
			default: props.theme.values.typography.fontSize['sm']
		},
		md: {
			default: props.theme.values.typography.fontSize['md']
		},
		lg: {
			default: props.theme.values.typography.fontSize['lg']
		}
	});

	return { fontSize: props.textsize };
};
