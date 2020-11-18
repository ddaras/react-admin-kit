import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Text from '@components/elements/Text';
import Divider from '@components/elements/Divider';
import Paper from '@components/modules/Paper';
import LoginForm from '@components/shared/LoginForm';

import useForm from '@hooks/useForm';
import useAuth from '@/hooks/useAuth';

import LOGIN from '@graphql/mutation/login';

const Login = ({ history }: RouteComponentProps) => {
	const { values, loading, handleChange, handleSubmit } = useForm(LOGIN, {
		id: 1,
		input: {
			username: 'Bret'
		}
	});

	const { login, check } = useAuth();

	const handleLogin = async (res: any) => {
		login(res.data.updateUser.id);
		await check();
		history.push('/');
	};

	return (
		<Paper size="lg" minWidth="380px" maxWidth="440px">
			<Text as="h2">Login</Text>
			<Divider isHidden size="lg" />

			<LoginForm
				onSubmit={handleSubmit(handleLogin)}
				handleInputChange={handleChange}
				loading={loading}
			/>

			<Divider size="sm" />
			<Text as="small">
				This is a demo version. No need credentials to login
			</Text>
		</Paper>
	);
};

export default Login;
