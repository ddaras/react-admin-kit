import gql from 'graphql-tag';

export default gql`
	mutation signIn($provider: String!, $token: String!) {
		signIn(provider: $provider, token: $token) {
			token
		}
	}
`;
