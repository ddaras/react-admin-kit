import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

const Input = ({ ...rest }: IProps) => {
	return <Element {...rest} />;
};

Input.defaultProps = {
	as: 'input',
	mb: 12,
	size: 'md',
	sizes: {
		sm: {
			p: 2,
			width: '100%',
			borderRadius: 0
		},
		md: {
			p: 3,
			width: '100%',
			borderRadius: 1
		},
		lg: {
			p: 4,
			width: '100%',
			borderRadius: 2
		}
	},
	kind: 'ghost',
	kinds: {
		ghost: {
			color: 'text',
			bg: 'background',
			border: '1px solid',
			borderColor: 'border',
			'&:focus': {
				borderColor: 'borderfocus'
			}
		}
	}
};

export default Input;
