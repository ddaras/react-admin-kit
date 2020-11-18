import React from 'react';
import { useQuery } from '@apollo/client';

import Text from '@components/elements/Text';
import Divider from '@components/elements/Divider';
import Button from '@components/elements/Button';
import Loader from '@components/modules/Loader';
import Container from '@components/collections/Grid/Container';
import Row from '@components/collections/Grid/Row';
import Col from '@components/collections/Grid/Col';
import useToasts from '@hooks/useToasts';
import USERS from '@graphql/query/users';

import HomeList from './HomeList';

const AVATARS = [
	'https://pickaface.net/gallery/avatar/unr_example_170227_1250_yq2lr.png',
	'https://pickaface.net/gallery/avatar/unr_wayne_201111_1016_x7ya9.png',
	'https://pickaface.net/gallery/avatar/Opi51c74f6c56e40.png',
	'https://pickaface.net/gallery/avatar/20110418_014738_1090_hilda.png',
	'https://pickaface.net/gallery/avatar/unr_hugo_201118_2136_95ceyb.png',
	'https://pickaface.net/gallery/avatar/unr_sonia_201118_0750_392pe.png',
	'https://pickaface.net/gallery/avatar/unr_noneothertahn_201118_1515_wmzzq.png',
	'https://pickaface.net/gallery/avatar/freud51c8b3f65e7dc.png',
	'https://pickaface.net/gallery/avatar/Opi51e65b61dcd54.png',
	'https://pickaface.net/gallery/avatar/benimen1651db3dfa700fa.png'
];

const Home = () => {
	const { addToast } = useToasts();

	const { data: usersRes = { users: { data: [] } }, loading } = useQuery(
		USERS,
		{
			fetchPolicy: 'network-only'
		}
	);

	return (
		<Container>
			<Row>
				<Col width={{ md: 6 / 12 }}>
					<Text as="h2">Home</Text>
				</Col>
				<Col width={{ md: 6 / 12 }} alignItems="flex-end">
					<Button kind="primary" onClick={() => addToast('Hi there, Im toast. Click me :)')}>
						Create
					</Button>
				</Col>
			</Row>

			<Divider size="lg" isHidden />

			{loading ? (
				<Loader kind="inline" />
			) : (
				<HomeList
					items={usersRes.users.data.map((item: any, index: number) => ({
						...item,
						avatarSrc: AVATARS[index]
					}))}
				/>
			)}
		</Container>
	);
};

export default Home;
