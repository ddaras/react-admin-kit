import React from 'react';
import { Transition } from 'react-transition-group';

import Element from '@components/elements/Element';
import { IProps } from '@components/elements/Element/styled';
import Paper from '@components/modules/Paper';

interface IModal extends IProps {
	isOpen: boolean;
	onClose: () => void;
}

const duration = 125;

const defaultbackLayerStyle = {
	transition: `all ${duration}ms ease-in-out`,
	opacity: 0,
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: '1000',
	backgroundColor: 'rgba(0, 0, 0, 0.64)'
};

const backLayerTransitionStyles = {
	entering: { opacity: 0 },
	entered: { opacity: 0.4 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
} as any;

const defaultModalContentStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
	overflowY: 'auto',
	overflowX: 'hidden',
	position: 'fixed',
	top: '40%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	zIndex: '1001'
};

const transitionModalContentStyles = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
} as any;

const Modal = ({ isOpen, children, onClose, ...rest }: IModal) => {
	const disableBodyScroll = () => {
		// document.querySelector('body').style.overflow = 'hidden';
	};

	const enableBodyScroll = () => {
		// document.querySelector('body').style.overflow = 'auto';
	};

	if (isOpen) {
		return (
			<Transition
				in={isOpen}
				timeout={0}
				onEntering={disableBodyScroll}
				onExiting={enableBodyScroll}
				unmountOnExit
			>
				{state => (
					<>
						<div
							style={{
								...defaultbackLayerStyle,
								...backLayerTransitionStyles[state]
							}}
							onClick={onClose}
						/>
						<div
							style={{
								...defaultModalContentStyle,
								...transitionModalContentStyles[state]
							}}
						>
							<Paper
								// onClick={e => {
								// 	e.stopPropagation();
								// }}
								bg="white"
								{...rest}
								// zIndex="1"
							>
								{children}
							</Paper>
						</div>
					</>
				)}
			</Transition>
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
