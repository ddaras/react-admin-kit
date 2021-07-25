import React from 'react';
import ReactDom from 'react-dom';
// import { Transition } from 'react-transition-group';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';
import Paper from '@modules/Paper';
import Fade from '@modules/Fade';

const body = document.getElementsByTagName('body')[0];

interface IModal extends IProps {
	isOpen: boolean;
	onClose: () => void;
}

const duration = 125;

const backLayerStyle = {
	position: 'fixed',
	opacity: 1,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: '1000',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-start',
	transition: `opacity ${duration}ms`
} as any;

const Modal = ({ isOpen, children, onClose, ...rest }: IModal) => {
	const [fadeIn, setFade] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setFade(isOpen);
		}, 10);
	}, [isOpen]);

	if (isOpen) {
		return ReactDom.createPortal(
			<div style={{ ...backLayerStyle, overflow: 'auto' }}>
				<Fade in={fadeIn} zIndex={1001}>
					<Paper bg="white" my="6rem" {...rest}>
						{children}
					</Paper>
				</Fade>

				<div
					style={{
						...backLayerStyle,
						backgroundColor: 'rgba(0, 0, 0, 0.34)',
						opacity: fadeIn ? 1 : 0
					}}
					onClick={onClose}
				/>
			</div>,
			body
		);
	}

	return null;
};

Modal.defaultProps = {
	cursor: 'default',
	onClose: () => {},
	borderRadius: 'md',
	p: 6,
	size: 'md',
	sizes: {
		md: {
			width: '32rem'
		}
	}
};

export default Modal;
