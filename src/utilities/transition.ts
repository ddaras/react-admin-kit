import { theming } from './theming';

export const transition = (props: any) => {
	const animation = theming('mode', {
		light: props.theme.values.transition.easing.easeInOut,
		dark: props.theme.values.transition.easing.easeInOut
	});

	const duration = theming('mode', {
		light: props.theme.values.transition.duration.short,
		dark: props.theme.values.transition.duration.short
	});

	return { transition: `all ${duration(props)}ms ${animation(props)}` };
};
