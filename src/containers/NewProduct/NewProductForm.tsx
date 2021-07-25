import React from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import Divider from '@components/Divider';
import Text from '@components/Text';
import Row from '@modules/Grid/Row';
import Col from '@modules/Grid/Col';
import UploadPhotos from '@modules/UploadPhotos';

interface Product {
	title: string;
	price: number;
	currency: string;
	description?: string;
	files: {
		id: string;
		src: string;
	}[];
}

const NewProductForm = ({
	input,
	onInputChange,
	onUpload,
	uploading,
	creating,
	onSubmit,
	onCancel
}: any) => {
	// const [input, setInput] = React.useState<Product>({
	// 	title: '',
	// 	price: 0,
	// 	currency: 'GEL',
	// 	description: '',
	// 	files: []
	// });

	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const name = e.target.name;
	// 	const value = e.target.value;

	// 	setInput(prevValues => ({
	// 		...prevValues,
	// 		[name]: e.target.type === 'number' ? parseFloat(value) : value
	// 	}));
	// };

	return (
		<>
			<Text as="label">Images</Text>

			<UploadPhotos
				files={input.files}
				handleUpload={onUpload}
				uploading={uploading}
			/>

			<Divider isHidden />

			<Text as="label">Title</Text>

			<Input
				name="title"
				placeholder="Title"
				value={input.title}
				onChange={onInputChange}
			/>

			<Divider isHidden />

			<Text as="label">Description</Text>

			<Input
				as="textarea"
				name="description"
				placeholder="Describe the item"
				minHeight="120px"
				value={input.description}
				onChange={onInputChange}
			/>

			<Divider isHidden />

			<Row>
				<Col width={{ md: 8 / 12 }}>
					<Text as="label">Price</Text>
					<div style={{ position: 'relative' }}>
						<Input
							pl={9}
							name="price"
							type="number"
							placeholder="250"
							value={input.price}
							onChange={onInputChange}
						/>
						<Text
							position="absolute"
							left={4}
							top="50%"
							transform="translateY(-50%)"
							color="grey5"
						>
							GEL
						</Text>
					</div>
				</Col>
			</Row>

			<Divider isHidden />

			<div style={{ display: 'flex' }}>
				<Button
					kind="primary"
					isLoading={creating}
					onClick={() => onSubmit(input)}
				>
					Add
				</Button>
				<Button ml={4} kind="ghost" onClick={onCancel}>
					Cancel
				</Button>
			</div>
		</>
	);
};

export default NewProductForm;
