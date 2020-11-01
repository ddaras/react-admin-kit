import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

import theme from '@/theme';

interface IRow extends IProps {
	noWrap?: boolean;
}

const Row = ({ children, noWrap, ...rest }: IRow) => {
	const flexWrap = noWrap ? 'nowrap' : 'wrap';

	const mx = `calc(-${theme.grid.gutterWidth}/2)`;

	return (
		<Element mx={mx} {...rest} flexWrap={flexWrap}>
			{children}
		</Element>
	);
};

Row.defaultProps = {
	display: 'flex',
	noWrap: false
};

export default Row;
