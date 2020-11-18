import React from 'react';

import Text from '@components/elements/Text';
import Paper from '@components/modules/Paper';
import List from '@components/collections/List';
import Row from '@components/collections/Grid/Row';

import HomeItem from './HomeItem';

const HomeList = ({ items }: any) => {
	return (
		<Paper>
			{items.length > 0 && (
				<List>
					{items.map((item: any, index: number) => (
						<HomeItem key={item.id} {...item} />
					))}
				</List>
			)}
			{!items.length && (
				<Row p="6em" justifyContent="center">
					<Text as="small">Empty :(</Text>
				</Row>
			)}
		</Paper>
	);
};

export default HomeList;
