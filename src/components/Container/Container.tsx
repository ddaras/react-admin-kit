import React from 'react';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

import theme from '@/theme';

const Container = React.forwardRef((props: IProps, ref) => {
	return (
		<Element ref={ref} maxWidth={theme.grid.containerMaxWidth} {...props} />
	);
});

Container.defaultProps = {
	width: '100%',
	py: '2.2rem',
	px: '1.8rem',
	mx: 'auto'
};

export default Container;
