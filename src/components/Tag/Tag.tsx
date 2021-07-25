import React from 'react';

import Element from '@components/Element/Element';
import { IProps } from '@components/Element/styled';

const Tag = ({ children, ...rest }: IProps) => {
	return <Element {...rest}>{children}</Element>;
};

Tag.defaultProps = {
	as: 'small',
	px: 3,
	py: 1,
	fontSize: 'caption',
	borderRadius: 'xl',
	letterSpacing: '.7px',
	kind: 'default',
	kinds: {
		default: {
			bg: 'grey1',
			color: 'grey8'
		},
		info: {
			bg: 'yellow0',
			color: 'yellow8'
		},
		success: {
			bg: 'green0',
			color: 'green8'
		}
	}
};

export default Tag;
