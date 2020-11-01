import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';

const Image = ({ ...rest }: IProps) => {
	return <Element {...rest} />;
};

Image.defaultProps = {
	as: 'img',
	width: '100%'
};

export default Image;
