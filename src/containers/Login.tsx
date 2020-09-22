import React from 'react';

import Element from '@components/elements/Element';
import Paper from '@components/modules/Paper';
import Button from '@components/elements/Button';
import Input from '@components/elements/Input';

const Login = () => {
	return (
		<Element p="10em 0" bg="#f1f1f1" minHeight="100vh">
			<Element width={420} mx="auto">
				<Paper size="lg">
					<Element as="h1" m="0 0 24px 0">
						Hi, I'm Element!
					</Element>
					<Input placeholder="Username" />
					<Input placeholder="Password" type="password" />
					<Button kind="primary">Hi, I'm Button</Button>
				</Paper>
			</Element>
		</Element>
	);
};

export default Login;
