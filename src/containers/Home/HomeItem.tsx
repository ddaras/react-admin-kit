import React from 'react';
import moment from 'moment';

import Text from '@components/elements/Text';
import Button from '@components/elements/Button';
import Divider from '@components/elements/Divider';
import Tag from '@components/elements/Tag';
import Avatar from '@components/modules/Avatar';
import ListItem from '@components/collections/List/ListItem';
import Row from '@components/collections/Grid/Row';
import Col from '@components/collections/Grid/Col';
import Modal from '@components/modules/Modal';

const HomeItem = ({
	id,
	username,
	avatarSrc,
	email,
	address,
	website
}: any) => {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<ListItem
			px={1}
			py={2}
			onClick={() => {}}
			// borderBottom={hasBottomLine ? '1px solid' : 0}
			borderColor="grey0"
		>
			<Row>
				<Col
					width={{ md: 1 / 12 }}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Avatar src={avatarSrc} borderRadius="rounded" />
				</Col>
				<Col width={{ md: 3 / 12 }}>
					<Text as="h4">{username}</Text>
					<Text as="small">{email}</Text>
				</Col>
				<Col width={{ md: 3 / 12 }}>
					<Tag kind="success">{address.city}</Tag>
				</Col>
				<Col width={{ md: 3 / 12 }}>{website}</Col>
				<Col
					width={{ md: 2 / 12 }}
					display="flex"
					justifyContent="flex-end"
					alignItems="center"
				>
					<Button size="sm" onClick={() => setShowModal(true)}>
						View Profile
					</Button>
				</Col>
			</Row>
			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<Text as="h2">Hi, I'm modal</Text>
				<Divider isHidden />
				<Text>This is my content</Text>
				<Divider />
				<Row>
					<Col width={{ sm: 12 / 12 }} display="flex" alignItems="flex-end">
						<Button kind="primary" onClick={() => setShowModal(false)}>
							Okay
						</Button>
					</Col>
				</Row>
			</Modal>
		</ListItem>
	);
};

export default HomeItem;
