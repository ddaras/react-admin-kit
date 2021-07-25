import React from 'react';
import { useTheme } from 'styled-components';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

export const Plus = ({ color, ...rest }: IProps) => {
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
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		</Element>
	);
};

Plus.defaultProps = {
	color: 'grey8'
};

export default Plus;
