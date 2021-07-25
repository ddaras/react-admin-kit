import React from 'react';

import Element from '@components/Element/Element';
import { IProps } from '@components/Element/styled';

const Progress = ({ value, ...rest }: IProps) => {
	const transition = 'width 0.2s ease-in';
	const width = `${value}%`;
	const height = '100%';
	const backgroundColor = 'indigo6';

	return (
		<Element {...rest}>
			<Element
				transition={transition}
				width={width}
				height={height}
				bg={backgroundColor}
				borderRadius="md"
			/>
		</Element>
	);
};

Progress.defaultProps = {
	width: '100%',
	height: '14px',
	value: 0,
	bg: 'grey2',
	borderRadius: 'md'
};

export default Progress;
