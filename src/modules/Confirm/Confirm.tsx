import React from 'react';

import { IProps } from '@components/Element/styled';
import Text from '@components/Text';
import Divider from '@components/Divider';
import Button from '@components/Button';
import Modal from '@modules/Modal';

interface IConfirm extends IProps {
	title: string;
	isOpen: boolean;
	onClose?: () => void;
	onSubmit: () => void;
	isSubmitting?: boolean;
}

const Confirm = ({
	isOpen,
	onSubmit,
	isSubmitting,
	title,
	onClose,
	...rest
}: IConfirm) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} {...rest}>
			<Text as="h3">{title}</Text>
			<Divider />

			<Button isLoading={isSubmitting} onClick={onSubmit}>
				Confirm
			</Button>
			<Button kind="ghost" onClick={onClose}>
				Cancel
			</Button>
		</Modal>
	);
};

Confirm.defaultProps = {};

export default Confirm;
