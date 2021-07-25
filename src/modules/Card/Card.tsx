import React from 'react';

import { IProps } from '@components/Element/styled';
import Element from '@components/Element';
import Divider from '@components/Divider';
import Image from '@components/Image';
import Text from '@components/Text';
import Paper from '@modules/Paper';

interface ICard extends IProps {
	onClick?: () => void;
	image?: string;
	title?: string;
	subTitle?: string;
}

const Card = ({
	children,
	title,
	subTitle,
	image,
	onClick,
	...rest
}: ICard) => {
	const cursor = onClick ? 'pointer' : 'inherit';

	const renderContent = () => {
		return (
			<Paper p={0}>
				<Image
					src={`${process.env.CDN_URL}${image}`}
					size="auto"
					borderRadius="8px 8px 0 0"
				/>
				<div style={{ padding: '8px 12px' }}>
					<Text as="p">{title}</Text>
					<Text as="small">{subTitle}</Text>
				</div>
			</Paper>
		);
	};

	return (
		<Element {...rest} cursor={cursor} onClick={onClick}>
			{renderContent()}
		</Element>
	);
};

Card.defaultProps = {
	onClick: null,
	width: '100%'
};

export default Card;
