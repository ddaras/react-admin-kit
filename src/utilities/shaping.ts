import { varianting } from './theming';

export const shaping = (props: any) => {
	const values = {
		xs: {
			default: `${props.theme.values.shape['xs']}px`
		},
		sm: {
			default: `${props.theme.values.shape['sm']}px`
		},
		md: {
			default: `${props.theme.values.shape['md']}px`
		},
		lg: {
			default: `${props.theme.values.shape['lg']}px`
		},
		xl: {
			default: `${props.theme.values.shape['xl']}px`
		}
	};

	const borderRadiusBySize = varianting('size', 'size', values);
	const borderRadiusByRounded = varianting('size', 'rounded', values);

	return {
		borderRadius: borderRadiusBySize(props) || borderRadiusByRounded(props)
	};
};
