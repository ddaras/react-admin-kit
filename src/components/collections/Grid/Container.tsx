import React from 'react';

import Element from '@components/elements/Element';
import { IProps } from '@components/elements/Element/styled';

import theme from '@/theme';

const Container = React.forwardRef((props: IProps, ref) => {
	return (
		<Element ref={ref} maxWidth={theme.grid.containerMaxWidth} {...props} />
	);
});

Container.defaultProps = {
	width: '100%',
	py: '2.2rem',
	px: '1.8rem'
};

export default Container;
