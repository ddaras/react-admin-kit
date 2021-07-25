import React from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import Divider from '@components/Divider';

const LoginForm = ({ onSubmit, handleInputChange, loading }: any) => {
	return (
		<form onSubmit={onSubmit}>
			{/* <Input
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
			<Divider isHidden size="sm" /> */}
			<Button isLoading={loading} isFluid>Sign in with Google</Button>
		</form>
	);
};

export default LoginForm;
