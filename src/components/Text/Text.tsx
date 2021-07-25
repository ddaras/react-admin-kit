import React from 'react';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

interface IText extends IProps {
	truncate?: boolean;
}

const Text = React.forwardRef(({ truncate, children, ...rest }: IText, ref) => {
	const truncateProps = {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		maxWidth: '100%'
	};

	return (
		<Element ref={ref} {...rest} {...(truncate ? truncateProps : {})}>
			{children}
		</Element>
	);
});

Text.defaultProps = {
	as: 'p',
	truncate: true
};

export default Text;
