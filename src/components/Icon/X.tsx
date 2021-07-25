import React from 'react';
import { useTheme } from 'styled-components';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

export const X = ({ color, ...rest }: IProps) => {
	const theme = useTheme();

	return (
		<Element
			as="svg"
			fill="none"
			stroke={theme.colors[color]}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		</Element>
	);
};

X.defaultProps = {
	color: 'grey8'
};

export default X;
