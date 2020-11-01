import React from 'react';

import { StyledElement, IProps } from './styled';

const Element = React.forwardRef(({ children, ...rest }: IProps, ref) => {
	return (
		<StyledElement ref={ref} {...rest}>
			{children}
		</StyledElement>
	);
});

Element.defaultProps = {
	as: 'div'
};

export default Element;
