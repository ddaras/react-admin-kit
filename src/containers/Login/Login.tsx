import React from 'react';
import { useMutation } from '@apollo/client';
import { useGoogleLogin } from 'react-google-login';
import { RouteComponentProps } from 'react-router-dom';

import Text from '@components/Text';
import Button from '@components/Button';
import Divider from '@components/Divider';
import Loader from '@modules/Loader';
import Paper from '@modules/Paper';

import useAuth from '@/hooks/useAuth';

import SING_IN from '@graphql/mutation/signIn';

const Login = ({ history }: RouteComponentProps) => {
	const { login, loading, refetch } = useAuth();

	const [mutateSignIn, { loading: signing }] = useMutation(SING_IN);

	const handleLogin = async (response: any) => {
		const res = await mutateSignIn({
			variables: {
				provider: 'google',
				token: response.tokenId
			}
		});


		if (!res.data) {
			// error
		} else {
			login(res.data.signIn.token);
			await refetch();
			history.push('/');
		}
	};

	const handleFailure = async (response: any) => {
		console.log(response);
	};

	const { signIn } = useGoogleLogin({
		clientId: `${process.env.GOOGLE_CLIENT_ID}`,
		onSuccess: handleLogin,
		onFailure: handleFailure,
		cookiePolicy: 'single_host_origin'
		// isSignedIn: true
	});

	return (
		<Paper size="lg" minWidth="380px" maxWidth="440px">
			<Text as="h2">Login</Text>
			<Divider isHidden size="lg" />

			{loading ? (
				<Loader />
			) : (
				<Button isFluid isLoading={signing} onClick={signIn}>
					Sign in with Google
				</Button>
			)}

			<Divider isHidden />
			<Text as="small">No credit card required. Forever free.</Text>
		</Paper>
	);
};

export default Login;
