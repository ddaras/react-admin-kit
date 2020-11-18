import React from 'react';

import Text from '@components/elements/Text';
import Divider from '@components/elements/Divider';
import Input from '@components/elements/Input';
import Button from '@components/elements/Button';
import Paper from '@components/modules/Paper';
import Container from '@components/collections/Grid/Container';
import Row from '@components/collections/Grid/Row';
import Col from '@components/collections/Grid/Col';

const Settings = () => {
	return (
		<Container>
			<Text as="h2">Settings</Text>

			<Divider size="lg" isHidden />

			<Paper>
				<Row>
					<Col width={{ md: 6 / 12 }}>
						<Text as="label">Username</Text>
						<Input />
						<Divider size="xs" isHidden />

						<Text as="label">Email</Text>
						<Input />
						<Divider size="xs" isHidden />

						<Text as="label">Website</Text>
						<Input />
						<Divider size="xs" isHidden />

						<Text as="label">Password</Text>
						<Input />
						<Divider isHidden />

						<Button kind="primary">Update Settings</Button>
					</Col>
					<Col width={{ md: 6 / 12 }}></Col>
				</Row>
			</Paper>
		</Container>
	);
};

export default Settings;
