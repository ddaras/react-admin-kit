import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import moment from 'moment';

import Element from '@components/Element';
import Text from '@components/Text';
import Tag from '@components/Tag';
import Button from '@components/Button';
import Divider from '@components/Divider';
import Container from '@components/Container';
import Paper from '@modules/Paper';
import LoaderCentered from '@modules/LoaderCentered';
import Row from '@modules/Grid/Row';
import Col from '@modules/Grid/Col';

import GET_ORDER from '@graphql/query/getOrder';

const ViewOrder = ({
	match: {
		params: { id }
	}
}: any) => {
	const { data, loading } = useQuery(GET_ORDER, {
		variables: {
			id
		},
		fetchPolicy: 'network-only'
	});

	if (loading) return <LoaderCentered />;

	return (
		<Container>
			<Element display="flex">
				<Text as="h2">Order #{id}</Text>
				<Button ml={4} as={Link} to="/orders">
					Back
				</Button>
			</Element>

			<Divider isHidden />

			<Paper>
				<Row>
					<Col width={{ sm: 1 / 2 }} display="flex" alignItems="flex-end">
						<Text>Created at</Text>
					</Col>
					<Col width={{ sm: 1 / 2 }}>
						<Text>
							{moment(data.getOrder.createdAt).format('YYYY-MM-DD HH:mm:ss')}
						</Text>
					</Col>
				</Row>

				<Divider />

				<Row>
					<Col width={{ sm: 1 / 2 }} display="flex" alignItems="flex-end">
						<Text>Status</Text>
					</Col>
					<Col width={{ sm: 1 / 2 }}>
						<Tag kind="info">{data.getOrder.status}</Tag>
					</Col>
				</Row>

				<Divider />

				<Row>
					<Col width={{ sm: 1 / 2 }} display="flex" alignItems="flex-end">
						<Text>Amount</Text>
					</Col>
					<Col width={{ sm: 1 / 2 }}>
						<Text>
							{data.getOrder.currency} {data.getOrder.amount}
						</Text>
					</Col>
				</Row>
			</Paper>
		</Container>
	);
};

export default ViewOrder;
