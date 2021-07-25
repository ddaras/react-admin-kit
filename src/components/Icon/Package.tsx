import React from 'react';
import { useTheme } from 'styled-components';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

export const Package = ({ color, ...rest }: IProps) => {
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
			<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
			<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
			<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
			<line x1="12" y1="22.08" x2="12" y2="12"></line>
		</Element>
	);
};

Package.defaultProps = {
	color: 'grey8'
};

export default Package;
