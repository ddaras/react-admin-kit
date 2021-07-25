import React from 'react';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';

const Image = ({ ...rest }: IProps) => {
	return <Element {...rest} />;
};

Image.defaultProps = {
	as: 'img',
	width: '100%',
	size: 'md',
	sizes: {
		md: {
			width: '180px'
		},
		auto: {
			width: 'unset'
		}
	}
};

export default Image;
