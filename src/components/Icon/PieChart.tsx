import React from 'react';
import { useTheme } from 'styled-components';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

export const PieChart = ({ color, ...rest }: IProps) => {
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
			<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
			<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
		</Element>
	);
};

PieChart.defaultProps = {
	color: 'grey8'
};

export default PieChart;
