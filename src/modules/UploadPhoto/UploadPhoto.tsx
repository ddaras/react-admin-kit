import React, { useRef } from 'react';

import Icon from '@components/Icon';
import Button from '@components/Button';
import Avatar from '@modules/Avatar';
import PhotoModal from '@modules/PhotoModal';
import useModal from '@hooks/useModal';

const UploadPhoto = ({
	files,
	uploading,
	onInputChange,
	onRemove,
	multiple,
	rounded
}: any) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const { isOpen, showModal, hideModal } = useModal();

	const addPhotoButton = () => {
		return (
			<div
				style={{
					width: 82,
					height: 83,
					marginLeft: 4,
					display: 'flex'
				}}
			>
				<Button
					borderRadius={rounded ? 'rounded' : 'lg'}
					flex={1}
					isLoading={uploading}
					onClick={() => inputRef.current && inputRef.current.click()}
				>
					<Icon name="Plus" display="flex" mx="auto" />
				</Button>
				<input
					type="file"
					ref={inputRef}
					style={{ display: 'none' }}
					onChange={onInputChange}
				/>
			</div>
		);
	};

	return (
		<div style={{ display: 'flex' }}>
			{files &&
				files.map((file: any) => (
					<div key={file.id} style={{ position: 'relative', marginRight: 4 }}>
						<Avatar
							src={process.env.CDN_URL + file.src}
							size="xl"
							onClick={showModal}
							borderRadius={rounded ? 'rounded' : 'md'}
						/>
						<div style={{ position: 'absolute', top: -4, right: -4 }}>
							<Button
								size="xs"
								borderRadius="rounded"
								boxShadow="md"
								onClick={() => onRemove(file.id)}
							>
								<Icon name="X" display="flex" size={14} />
							</Button>
						</div>
					</div>
				))}

			{(multiple || !files) && addPhotoButton()}

			<PhotoModal isOpen={isOpen} onClose={hideModal} items={files || []} />
		</div>
	);
};

UploadPhoto.defaultProps = {
	multiple: false,
	rounded: false
};

export default UploadPhoto;
