import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

const Segment = React.forwardRef(({ children, ...rest }: IProps, ref) => {
	return (
		<Element ref={ref} {...rest}>
			{children}
		</Element>
	);
});

Segment.defaultProps = {
	size: 'md',
	sizes: {
		sm: {
			p: 3,
			borderRadius: 'sm',
			boxShadow: 'sm'
		},
		md: {
			p: 5,
			borderRadius: 'md',
			boxShadow: 'md'
		},
		lg: {
			p: 8,
			borderRadius: 'lg',
			boxShadow: 'lg'
		}
	},
	kind: 'ghost',
	kinds: {
		ghost: {
			bg: 'white'
		}
	}
};

export default Segment;
