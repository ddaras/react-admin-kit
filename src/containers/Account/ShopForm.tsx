import React from 'react';

import Input from '@components/Input';
import Divider from '@components/Divider';

const ShopForm = ({ values, onInputChange }: any) => {
	return (
		<>
			<Input
				placeholder="shopName"
				name="shopName"
				value={values.shopName}
				onChange={onInputChange}
			/>
			<Divider isHidden size="sm" />

			<Input
				as="textarea"
				placeholder="shopDescription"
				name="shopDescription"
				onChange={onInputChange}
				type="password"
				value={values.shopDescription}
			/>
			<Divider isHidden size="sm" />
		</>
	);
};

export default ShopForm;
