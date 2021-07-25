import React from 'react';
import { Link } from 'react-router-dom';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

const Anchor = ({ ...rest }: IProps & { to: string }) => {
	return <Element {...rest} />;
};

Anchor.defaultProps = {
	as: Link,
	textsize: 16
};

export default Anchor;
