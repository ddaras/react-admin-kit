import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';
import Image from '@components/elements/Image';
import Text from '@components/elements/Text';

interface IAvatar extends IProps {
	onClick?: () => void;
	src?: string;
	content?: string;
	isActive?: string;
}

const Avatar = ({
	children,
	src,
	content,
	onClick,
	isActive,
	...rest
}: IAvatar) => {
	const cursor = onClick ? 'pointer' : 'inherit';
	const opacity = isActive ? 1 : 0.4;

	const renderContent = () => {
		if (content && !src) {
			return <Text as="small">{content}</Text>;
		}
		return <Image src={src} opacity={opacity} />;
	};

	return (
		<Element {...rest} cursor={cursor} onClick={onClick}>
			{renderContent()}
		</Element>
	);
};

Avatar.defaultProps = {
	onClick: null,
	content: null,
	isActive: true,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	overflow: 'hidden',
	border: '2px solid',
	borderColor: 'white',
	bg: 'grey2',
	size: 'md',
	sizes: {
		xs: {
			size: 24,
			minWidth: 24
		},
		sm: {
			size: 32,
			borderRadius: 'sm'
		},
		md: {
			size: 48,
			borderRadius: 'md'
		},
		lg: {
			size: 56,
			borderRadius: 'lg'
		}
	}
};

export default Avatar;
