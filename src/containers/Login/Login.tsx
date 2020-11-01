import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Text from '@components/elements/Text';
import Divider from '@components/elements/Divider';
import Paper from '@components/modules/Paper';
import LoginForm from '@components/shared/LoginForm';

import useForm from '@hooks/useForm';
import useMe from '@hooks/useMe';

import LOGIN from '@graphql/mutation/login';

const Login = ({ history }: RouteComponentProps) => {
	const { loading, handleInputChange, handleSubmit } = useForm(LOGIN);
	const { login, refetch } = useMe();

	return (
		<Paper size="lg" minWidth="380px" maxWidth="440px">
			<Text as="h2">MohBot</Text>
			<Divider isHidden size="lg" />

			<LoginForm
				handleSubmit={handleSubmit((res: any) => {
					refetch();
					login(res.data.login.token);
				})}
				handleInputChange={handleInputChange}
				loading={loading}
			/>
		</Paper>
	);
};

export default Login;
