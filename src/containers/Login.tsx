import React from 'react';

import Element from '@components/Element';
import Segment from '@components/Segment';
import Button from '@components/Button';
import Input from '@components/Input';

const Login = () => {
	return (
		<Element p="10em 0" kind="default" h="100vh">
			<Element w={400} m="0 auto">
				<Segment size="lg">
					<Element as="h1" m="0 0 24px 0">
						Hi, I'm Element!
					</Element>
					<Input placeholder="Username" />
					<Input placeholder="Password" type="password" />
					<Button kind="primary">Hi, I'm Button</Button>
				</Segment>
			</Element>
		</Element>
	);
};

export default Login;
