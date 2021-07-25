import React from 'react';
import { Link } from 'react-router-dom';

import Element from '@components/Element/Element';
import { IProps } from '@components/Element/styled';

interface IListItem extends IProps {
	onClick?: () => void;
	to?: string;
}

const ListItem = ({ children, to, ...rest }: IListItem) => {
	return (
		<Element as={to ? Link : 'div'} to={to} {...rest}>
			{children}
		</Element>
	);
};

ListItem.defaultProps = {
	onClick: null
};

export default ListItem;
