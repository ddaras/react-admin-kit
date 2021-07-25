import React from 'react';

import List from '@components/List';
import Empty from '@modules/Empty';
import Row from '@modules/Grid/Row';

import ProductsItem from './ProductsItem';

const ProductList = ({ items }: any) => {
	if (!items.length) return <Empty />;

	return (
		<Row>
			{items.map((item: any, index: number) => (
				<ProductsItem
					key={item.id}
					{...item}
					hasBottomLine={items.length - 1 !== index}
				/>
			))}
		</Row>
	);
};

ProductList.defaultProps = {
	items: []
};

export default ProductList;
