import React from 'react';
import { useQuery } from '@apollo/client';

import Text from '@components/Text';
import Divider from '@components/Divider';
import Button from '@components/Button';
import Container from '@components/Container';
import Row from '@modules/Grid/Row';
import Col from '@modules/Grid/Col';
import Paper from '@modules/Paper';
import LoaderCentered from '@modules/LoaderCentered';
import useToasts from '@hooks/useToasts';
import useModal from '@hooks/useModal';

import GET_ITEMS from '@/graphql/query/getItems';

import ProductsList from './ProductsList';
import NewProductModal from './NewProductModal';

const Products = () => {
	const { addToast } = useToasts();

	const {
		isOpen: addProductIsVisible,
		showModal: showAddProductModal,
		hideModal: hideAddProductModal
	} = useModal();

	const { data, loading } = useQuery(GET_ITEMS, {
		fetchPolicy: 'network-only'
	});

	if (loading) return <LoaderCentered />;

	return (
		<Container>
			<Row>
				<Col width={{ md: 6 / 12 }}>
					<Text as="h2">Products</Text>
				</Col>
				<Col width={{ md: 6 / 12 }} alignItems="flex-end">
					<Button to="/products/new" kind="primary">
						New Product
					</Button>
				</Col>
			</Row>

			<Divider size="lg" isHidden />

			<div>
				<ProductsList items={data?.getItems} />
			</div>

			<NewProductModal
				isOpen={addProductIsVisible}
				onClose={hideAddProductModal}
			/>
		</Container>
	);
};

export default Products;
