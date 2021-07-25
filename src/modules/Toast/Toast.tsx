import React from 'react';

import Element from '@components/Element/Element';
import { IProps } from '@components/Element/styled';
import Text from '@components/Text';
import Paper from '@modules/Paper';

interface IToast extends IProps {
	content?: string;
	onClick?: () => void;
}

const Toast = ({ content, ...rest }: IToast) => {
	const paperStyle = {
		py: 4,
		px: 8,
		bg: 'red1',
		color: 'red8',
		border: 0
	};

	return (
		<Paper {...paperStyle} {...rest}>
			<Text as="h4">{content}</Text>
		</Paper>
	);
};

Toast.defaultProps = {
	position: 'fixed',
	top: '24px',
	left: '50%',
	transform: 'translateX(-50%)',
	cursor: 'pointer',
	kind: 'default',
	kinds: {
		default: {
			bg: 'white'
		},
		success: {
			color: 'green9',
			bg: 'green0'
		}
	}
};

export default Toast;
