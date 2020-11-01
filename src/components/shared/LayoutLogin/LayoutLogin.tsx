import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

const LayoutLogin = ({ children, ...rest }: IProps) => {
	return <Element {...rest}>{children}</Element>;
};

LayoutLogin.defaultProps = {
	p: '10em 0',
	bg: 'grey0',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-start'
};

export default LayoutLogin;
