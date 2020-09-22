import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

const Segment = ({ children, ...rest }: IProps) => {
	return <Element {...rest}>{children}</Element>;
};

Segment.defaultProps = {
	size: 'md',
	sizes: {
		sm: {
			p: 3,
			borderRadius: 1,
			boxShadow: 0
		},
		md: {
			p: 5,
			borderRadius: 1,
			boxShadow: 1
		},
		lg: {
			p: 8,
			borderRadius: 2,
			boxShadow: 2
		}
	},
	kind: 'ghost',
	kinds: {
		ghost: {
			color: 'text',
			bg: 'background',
			border: '1px solid',
			borderColor: 'border',
			boxShadow: 1,
			'&:focus': {
				borderColor: 'borderfocus',
				boxShadow: 2
			}
		}
	},
	border: '1px solid',
	borderColor: 'border'
};

export default Segment;
