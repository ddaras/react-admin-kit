import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

const List = ({ children, ...rest }: IProps) => {
	return <Element {...rest}>{children}</Element>;
};

List.defaultProps = {};

export default List;
