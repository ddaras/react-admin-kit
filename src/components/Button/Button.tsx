import React from 'react';

import Element, { IProps } from '@components/Element/Element';

const Button = ({ children, ...rest }: IProps) => {
	return <Element {...rest}>{children}</Element>;
};

Button.defaultProps = {
	as: 'button',
	size: 'md',
	kind: 'default',
	elevation: 'xs',
	hoverElevation: 'lg',
	activeElevation: 'xs'
};

export default Button;
