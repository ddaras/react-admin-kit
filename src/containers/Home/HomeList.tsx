import React from 'react';

import Text from '@components/elements/Text';
import Checkbox from '@components/elements/Checkbox';
import Divider from '@components/elements/Divider';
import Button from '@components/elements/Button';
import Paper from '@components/modules/Paper';
import List from '@components/collections/List';
import ListItem from '@components/collections/List/ListItem';
import Row from '@components/collections/Grid/Row';
import Col from '@components/collections/Grid/Col';

import CaseItem from './HomeItem';

const CasesList = ({
	items,
	selectedItems,
	progress,
	onRegister,
	registering,
	onClose,
	closing,
	onToggle,
	onToggleAll,
	onRegisterSelected,
	onCloseSelected
}: any) => {
	return (
		<Paper>
			<List>
				<ListItem px={1} py={2}>
					<Row>
						<Col width={{ md: 0.6 / 12 }}>
							<Checkbox
								isChecked={
									items.length === selectedItems.length && items.length !== 0
								}
								onChange={onToggleAll}
							/>
						</Col>
						<Col width={{ md: 11.4 / 12 }}>
							<Row>
								<Col borderRight="1px solid" borderColor="grey2">
									<Text as="small">{selectedItems.length} selected</Text>
								</Col>
								<Col>
									<Button size="sm" onClick={onRegisterSelected}>
										Register Selected
									</Button>
								</Col>
								<Col>
									<Button
										size="sm"
										isLoading={closing}
										onClick={onCloseSelected}
									>
										Close Selected
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</ListItem>
			</List>

			<Divider />

			{items.length > 0 && (
				<List>
					{items.map((item: any, index: number) => (
						<CaseItem
							key={item.number}
							progress={progress}
							onRegister={onRegister}
							registering={registering}
							onClose={onClose}
							closing={closing}
							onToggle={onToggle}
							hasBottomLine={items.length !== index + 1}
							isChecked={!!selectedItems.find((x: any) => x === item.id)}
							{...item}
						/>
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

export default CasesList;
