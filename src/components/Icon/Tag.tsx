import React from 'react';
import { useTheme } from 'styled-components';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

export const Tag = ({ color, ...rest }: IProps) => {
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
			<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
			<line x1="7" y1="7" x2="7.01" y2="7"></line>
		</Element>
	);
};

Tag.defaultProps = {
	color: 'grey8'
};

export default Tag;
