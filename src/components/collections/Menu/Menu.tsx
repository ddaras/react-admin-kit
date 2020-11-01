import React from 'react';

import { IProps } from '@components/elements/Element/styled';
import List from '@components/collections/List';

const Menu = ({ children, ...rest }: IProps) => {
	return <List {...rest}>{children}</List>;
};

Menu.defaultProps = {
	size: 'none',
	sizes: {
		none: {
			p: 0
		},
		xs: {
			p: 1
		},
		sm: {
			p: 2
		},
		md: {
			p: 3
		},
		lg: {
			p: 4
		}
	}
};

export default Menu;
