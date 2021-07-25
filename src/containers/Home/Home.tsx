import React from 'react';
import { useQuery } from '@apollo/client';

import Text from '@components/Text';
import Divider from '@components/Divider';
import Button from '@components/Button';
import Paper from '@modules/Paper';
import Container from '@/components/Container/Container';
import Row from '@modules/Grid/Row';
import Col from '@modules/Grid/Col';
import Empty from '@modules/Empty';
import LoaderCentered from '@modules/LoaderCentered';
import useToasts from '@hooks/useToasts';

// import OrdersList from './OrdersList';

import GET_ORDERS from '@/graphql/query/getOrders';

const Home = () => {
	const { addToast } = useToasts();

	const { data, loading } = useQuery(GET_ORDERS, {
		fetchPolicy: 'network-only'
	});

	if (loading) return <LoaderCentered />;

	return (
		<Container>
			<Row>
				<Col width={{ md: 6 / 12 }}>
					<Text as="h2">Dashboard</Text>
				</Col>
				<Col width={{ md: 6 / 12 }} alignItems="flex-end">
					{/* <Button
						kind="primary"
						onClick={() => addToast('Hi there, Im toast. Click me :)')}
					>
						Create
					</Button> */}
				</Col>
			</Row>

			<Divider size="lg" isHidden />

			<Paper>{/* <OrdersList items={data?.getOrders} /> */}</Paper>
		</Container>
	);
};

export default Home;
