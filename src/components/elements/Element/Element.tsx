import React from 'react';

import { StyledElement, IProps } from './styled';

const Element = ({ children, ...rest }: IProps) => {
	return <StyledElement {...rest}>{children}</StyledElement>;
};

Element.defaultProps = {
	as: 'div'
};

export default Element;
