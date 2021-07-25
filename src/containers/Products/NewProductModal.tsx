import React from 'react';

import Text from '@components/Text';
import Divider from '@components/Divider';
import Modal from '@modules/Modal';

import NewProductForm from '../NewProduct/NewProductForm';

const Modals = ({ isOpen, onClose }: any) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Text as="h3">New Product</Text>
			<Divider isHidden />

			<NewProductForm onCancel={onClose} />
		</Modal>
	);
};

export default Modals;
