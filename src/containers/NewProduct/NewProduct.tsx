import React, { useRef, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

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
import UploadPhotos from '@modules/UploadPhotos';
import useToasts from '@hooks/useToasts';

import UPLOAD_FILE from '@graphql/mutation/uploadFile';
import CREATE_ITEM from '@graphql/mutation/createItem';

import NewProductForm from './NewProductForm';

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

const NewProduct = ({ history }: any) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [input, setInput] = useState<Product>({
		title: '',
		price: 0,
		currency: 'GEL',
		description: '',
		files: []
	});

	const { addToast } = useToasts();

	const [uploadFile, { loading: uploading }] = useMutation(UPLOAD_FILE);

	const [createItem, { data, loading: creating }] = useMutation(CREATE_ITEM);

	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];

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
	};

	const handleCreate = async () => {
		try {
			const res: any = await createItem({
				variables: {
					input
				}
			});

			if (!res.data.createItem) {
				throw new Error('Error');
			}

			history.push('/products');
		} catch (e) {
			// console.log(e);
			// error
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

	return (
		<Container>
			<Row>
				<Col width={{ md: 6 / 12 }}>
					<Text as="h2">New Product</Text>
				</Col>
				<Col width={{ md: 6 / 12 }} alignItems="flex-end"></Col>
			</Row>

			<Divider size="lg" isHidden />

			<Paper>
				<Row>
					<Col width={{ md: 7 / 12 }} justifyContent="flex-start">
						<NewProductForm
							input={input}
							onInputChange={handleChange}
							onSubmit={handleCreate}
							onUpload={handleUpload}
							creating={creating}
							onCancel={() => history.push('/products')}
						/>
					</Col>
				</Row>
			</Paper>
		</Container>
	);
};

export default NewProduct;
