import React from 'react';

import { IProps } from '@components/Element/styled';
import ListItem from '@/components/ListItem';

interface IMenuItem extends IProps {
	onClick?: () => void;
	to?: string;
}

const MenuItem = ({ children, onClick, to, ...rest }: IMenuItem) => {
	const cursor = onClick || to ? 'pointer' : 'default';

	return (
		<ListItem onClick={onClick} to={to} cursor={cursor} {...rest}>
			{children}
		</ListItem>
	);
};

MenuItem.defaultProps = {
	onClick: null,
	display: 'flex',
	my: 2,
	kind: 'ghost',
	kinds: {
		primary: {
			color: 'indigo8'
		},
		ghost: {
			'&:hover': {
				color: 'indigo8'
			}
		}
	}
};

export default MenuItem;
