import React from 'react';

import Element, { IProps } from '@components/Element/Element';

const Segment = ({ children, ...rest }: IProps) => {
	return <Element {...rest}>{children}</Element>;
};

Segment.defaultProps = {
	sizescale: 2,
	size: 'md',
	kind: 'ghost',
	elevation: 'md'
};

export default Segment;
