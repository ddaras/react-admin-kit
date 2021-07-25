import React from 'react';
import moment from 'moment';

import Text from '@components/Text';
import Divider from '@components/Divider';
import Tag from '@components/Tag';
import ListItem from '@components/ListItem';
import Avatar from '@modules/Avatar';
import Row from '@modules/Grid/Row';
import Col from '@modules/Grid/Col';

const OrderItem = ({
	id,
	email,
	amount,
	currency,
	status,
	createdAt,
	hasBottomLine
}: any) => {
	return (
		<ListItem to={`/orders/view/${id}`}>
			<Row>
				<Col width={{ md: 8 / 12 }}>{email}</Col>
				<Col width={{ md: 1 / 12 }} display="flex" alignItems="flex-end">
					<div style={{ display: 'flex', alignItems: 'flex-end' }}>
						<Text as="small" mr={2}>
							{currency}
						</Text>
						<Text as="strong">{amount}</Text>
					</div>
				</Col>
				<Col width={{ md: 1 / 12 }} display="flex" alignItems="flex-end">
					<Tag kind="info">{status}</Tag>
				</Col>
				<Col width={{ md: 2 / 12 }} display="flex" alignItems="flex-end">
					{moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}
				</Col>
			</Row>
			{hasBottomLine && <Divider />}
		</ListItem>
	);
};

export default OrderItem;
