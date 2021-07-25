import React from 'react';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

import theme from '@/theme';

const Col = ({ children, ...rest }: IProps) => {
	const px = `calc(${theme.grid.gutterWidth}/2)`;

	return (
		<Element px={px} {...rest}>
			{children}
		</Element>
	);
};

Col.defaultProps = {
	width: { sm: 'auto', md: 'auto', lg: 'auto' },
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start'
};

export default Col;
