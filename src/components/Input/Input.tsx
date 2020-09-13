import React from 'react';

import Element, { IProps } from '@components/Element/Element';

const Input = ({ ...rest }: IProps) => {
	return <Element {...rest} />;
};

Input.defaultProps = {
	as: 'input',
	size: 'md',
	elevation: 'xs',
	focusElevation: 'lg',
	w: '100%',
	m: '0 0 12px 0'
};

export default Input;
