import React, { useState, useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Text from '@components/Text';
import Divider from '@components/Divider';
import Button from '@components/Button';
import Input from '@components/Input';
import Icon from '@components/Icon';
import Container from '@/components/Container/Container';
import Row from '@modules/Grid/Row';
import Col from '@modules/Grid/Col';
import Paper from '@modules/Paper';
import Avatar from '@modules/Avatar';
import LoaderCentered from '@modules/LoaderCentered';
import Confirm from '@modules/Confirm';
import UploadPhotos from '@modules/UploadPhotos';
import useToasts from '@hooks/useToasts';
import useModal from '@hooks/useModal';

import UPLOAD_FILE from '@graphql/mutation/uploadFile';
import GET_ITEM from '@/graphql/query/getItem';
import UPDATE_ITEM from '@/graphql/mutation/updateItem';
import DELETE_ITEM from '@/graphql/mutation/deleteItem';

interface Product {
	id?: string;
	title: string;
	price: number;
	currency: string;
	description: string;
	files: {
		id: string;
		src: string;
	}[];
}

interface ProductData {
	getItem: Product;
}

interface ProductVars {
	id: string;
}

const ProductsEdit = ({
	history,
	match: {
		params: { id }
	}
}: any) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { addToast } = useToasts();
	const { isOpen, showModal, hideModal } = useModal();

	const [input, setInput] = useState<Product>({
		title: '',
		price: 0,
		currency: 'GEL',
		description: '',
		files: []
	});

	const { data, loading } = useQuery<ProductData, ProductVars>(GET_ITEM, {
		variables: {
			id
		},
		fetchPolicy: 'network-only',
		onCompleted: res =>
			setInput({
				title: res.getItem.title,
				price: res.getItem.price,
				currency: res.getItem.currency,
				description: res.getItem.description,
				files: res.getItem.files.map(item => ({ id: item.id, src: item.src }))
			})
	});

	const [uploadFile, { loading: uploading }] = useMutation(UPLOAD_FILE);
	const [updateItem, { loading: updating }] = useMutation(UPDATE_ITEM);
	const [deleteItem, { loading: deleting }] = useMutation(DELETE_ITEM);

	const handleUpdate = async () => {
		try {
			await updateItem({
				variables: {
					id,
					input
				}
			});

			history.push('/products');
		} catch (e) {
			// error
		}
	};

	const handleDelete = async () => {
		await deleteItem({
			variables: {
				id
			}
		});

		hideModal();
		history.push('/products');
	};

	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];

		if (file) {
			const res = await uploadFile({
				variables: {
					file
				}
			});

			setInput((prevValues: any) => ({
				...prevValues,
				files: [
					...prevValues.files,
					{
						id: res.data.uploadFile.id,
						src: res.data.uploadFile.path
					}
				]
			}));
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;

		setInput(prevValues => ({
			...prevValues,
			[name]: e.target.type === 'number' ? parseFloat(value) : value
		}));
	};

	const handleImageRemove = (val: string) => {
		setInput(prevInput => ({
			...prevInput,
			files: prevInput.files.filter(x => x.id !== val)
		}));
	};

	if (loading || !data) return <LoaderCentered />;

	return (
		<Container>
			<Row>
				<Col width={{ md: 6 / 12 }}>
					<Text as="h2">Edit Product</Text>
				</Col>
				<Col width={{ md: 6 / 12 }} alignItems="flex-end"></Col>
			</Row>

			<Divider size="lg" isHidden />

			<Paper>
				<Row>
					<Col width={{ md: 7 / 12 }} justifyContent="flex-start">
						<Text as="label">Images</Text>
						<UploadPhotos
							files={input.files}
							onInputChange={handleUpload}
							onRemove={handleImageRemove}
							uploading={uploading}
						/>
						<Divider isHidden />

						<Text as="label">Title</Text>
						<Input
							name="title"
							placeholder="Title"
							value={input.title}
							onChange={handleChange}
						/>
						<Divider isHidden />

						<Text as="label">Description</Text>
						<Input
							as="textarea"
							name="description"
							placeholder="Describe the item"
							minHeight="120px"
							value={input.description}
							onChange={handleChange}
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
										onChange={handleChange}
									/>
									<Text
										position="absolute"
										left={4}
										top="50%"
										transform="translateY(-50%)"
										color="grey5"
									>
										{input.currency}
									</Text>
								</div>
							</Col>
						</Row>

						<Divider isHidden />

						<Row>
							<Col width={{ md: 6 / 12 }}>
								<div style={{ display: 'flex' }}>
									<Button
										kind="primary"
										isLoading={updating}
										onClick={handleUpdate}
									>
										Save
									</Button>
									<Button
										ml={4}
										kind="ghost"
										onClick={() => history.push('/products')}
									>
										Cancel
									</Button>
								</div>
							</Col>
							<Col width={{ md: 6 / 12 }} display="flex" alignItems="flex-end">
								<Button kind="ghostDanger" onClick={showModal}>
									Delete
								</Button>
							</Col>
						</Row>
					</Col>
					<Col width={{ md: 5 / 12 }}></Col>
				</Row>
			</Paper>

			<Confirm
				isOpen={isOpen}
				onClose={hideModal}
				onSubmit={handleDelete}
				isSubmitting={deleting}
				title="Are you sure?"
			/>
		</Container>
	);
};

export default ProductsEdit;
