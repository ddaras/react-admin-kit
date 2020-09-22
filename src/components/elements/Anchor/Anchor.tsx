import React from 'react';
import { Link } from 'react-router-dom';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

const Anchor = ({ ...rest }: IProps & { to: string }) => {
	return <Element {...rest} />;
};

Anchor.defaultProps = {
	as: Link,
	textsize: 16
};

export default Anchor;
