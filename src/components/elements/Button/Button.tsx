import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

const Button = ({ children, ...rest }: IProps) => {
	return <Element {...rest}>{children}</Element>;
};

Button.defaultProps = {
	as: 'button',
	size: 'md',
	sizes: {
		sm: {
			p: 2,
			borderRadius: 0
		},
		md: {
			px: 16,
			py: 3,
			borderRadius: 1
		},
		lg: {
			p: 4,
			borderRadius: 2
		}
	},
	kind: 'secondary',
	kinds: {
		primary: {
			letterSpacing: 1,
			color: 'white',
			bg: 'primary',
			border: '1px solid',
			borderColor: 'primary',
			boxShadow: 1,
			'&:hover': {
				boxShadow: 3
			},
			'&:active': {
				boxShadow: 2
			}
		},
		secondary: {
			color: 'darkgrey',
			bg: 'lightgrey',
			border: '1px solid',
			borderColor: 'grey'
		},
		ghost: {
			color: 'black',
			bg: 'white',
			border: 0
		}
	}
};

export default Button;
