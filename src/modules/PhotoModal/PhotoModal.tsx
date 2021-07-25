import React from 'react';

import Image from '@components/Image';
import Modal from '@modules/Modal';

const PhotoModal = ({ isOpen, onClose, items }: any) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			{items.map((item: any) => (
				<Image
					key={item.id}
					src={process.env.CDN_URL + item.src}
					size="auto"
					mb={4}
				/>
			))}
		</Modal>
	);
};

export default PhotoModal;
