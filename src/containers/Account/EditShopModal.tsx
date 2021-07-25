import React from 'react';

import { IProps } from '@components/Element/styled';
import Text from '@components/Text';
import Divider from '@components/Divider';
import Button from '@components/Button';
import Modal from '@modules/Modal';

import ShopForm from './ShopForm';

interface IEditShopModal extends IProps {
	title: string;
	isOpen: boolean;
	renderForm: () => void;
	onClose?: () => void;
	onSubmit?: () => void;
	submitting?: boolean;
}

const EditShopModal = ({
	children,
	renderForm,
	isOpen,
	onSubmit,
	submitting,
	title,
	onClose,
	...rest
}: IEditShopModal) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} {...rest}>
			<Text as="h3">{title}</Text>
			<Divider isHidden />

			{renderForm()}

			<Divider isHidden />
			<Button kind="primary" isLoading={submitting} onClick={onSubmit}>
				Save
			</Button>
			<Button kind="ghost" ml={2} onClick={onClose}>
				Cancel
			</Button>
		</Modal>
	);
};

EditShopModal.defaultProps = {};

export default EditShopModal;
