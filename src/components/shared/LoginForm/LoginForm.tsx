import React from 'react';

import Button from '@components/elements/Button';
import Input from '@components/elements/Input';
import Divider from '@components/elements/Divider';

const LoginForm = ({
	onSubmit: handleSubmit,
	handleInputChange,
	loading
}: any) => {
	return (
		<form onSubmit={handleSubmit}>
			<Input
				placeholder="Username"
				name="input.username"
				onChange={handleInputChange}
			/>
			<Divider isHidden size="sm" />
			<Input
				placeholder="Password"
				name="password"
				onChange={handleInputChange}
				type="password"
			/>
			<Divider isHidden size="sm" />
			<Button kind="primary" isLoading={loading}>
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
