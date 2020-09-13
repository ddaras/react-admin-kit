import React from 'react';
import { Link } from 'react-router-dom';

import Element, { IProps } from '@components/Element/Element';

const Anchor = ({ ...rest }: IProps) => {
	return <Element {...rest} />;
};

Anchor.defaultProps = {
	as: Link,
	textsize: 16
};

export default Anchor;
