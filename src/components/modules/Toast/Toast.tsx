import React from 'react';

import Element from '@components/elements/Element/Element';
import { IProps } from '@components/elements/Element/styled';
import Paper from '@components/modules/Paper';

interface IToast extends IProps {
	content?: string;
	onClick?: () => void;
}

const Toast = ({ content, ...rest }: IToast) => {
	const paperStyle = {
		py: 1,
		px: 4,
		bg: 'red1',
		color: 'red8',
		border: 0
	};

	return (
		<Element {...rest}>
			<Paper {...paperStyle}>{content}</Paper>
		</Element>
	);
};

Toast.defaultProps = {
	position: 'fixed',
	top: '24px',
	left: '50%',
	transform: 'translateX(-50%)',
	cursor: 'pointer'
};

export default Toast;
