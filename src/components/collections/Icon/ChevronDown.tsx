import React from 'react';

import Element from '@components/elements/Element';
import { IProps } from '@components/elements/Element/styled';

import theme from '@src/theme';

export const ChevronDown = ({ color, ...rest }: IProps) => (
	<Element
		as="svg"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...rest}
	>
		<polyline points="6 9 12 15 18 9"></polyline>
	</Element>
);

ChevronDown.defaultProps = {
	color: theme.colors.grey5
};

export default ChevronDown;
