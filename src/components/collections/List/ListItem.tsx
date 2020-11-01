import React from 'react';
import { Link } from 'react-router-dom';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

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
