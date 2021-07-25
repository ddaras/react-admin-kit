import React from 'react';

import List from '@components/List';
import Empty from '@modules/Empty';

import OrderItem from './OrderItem';

const OrdersList = ({ items }: any) => {
	if (!items.length) return <Empty />;

	return (
		<List>
			{items.map((item: any, index: number) => (
				<OrderItem
					key={item.id}
					{...item}
					hasBottomLine={items.length - 1 !== index}
				/>
			))}
		</List>
	);
};

OrdersList.defaultProps = {
	items: []
};

export default OrdersList;
