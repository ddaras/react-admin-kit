import React from 'react';
import { useHistory } from 'react-router-dom';

import Divider from '@components/Divider';
import Card from '@modules/Card';
import Col from '@modules/Grid/Col';

const ProductItem = ({
	id,
	title,
	price,
	currency,
	files,
	hasBottomLine
}: any) => {
	const history = useHistory();

	return (
		<Col
			width={{ md: 1 / 5 }}
			display="flex"
			justifyContent="flex-end"
			alignItems="center"
		>
			<Card
				image={files[0].src}
				onClick={() => history.push(`/products/edit/${id}`)}
				title={title}
				subTitle={`${currency}${price}`}
			/>
			<Divider />
		</Col>
	);
};

export default ProductItem;
