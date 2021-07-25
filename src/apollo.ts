import {
	ApolloClient,
	InMemoryCache,
	from,
	HttpLink,
	split
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';

const uploadLink = createUploadLink({
	uri: process.env.API_URL
});

const wsLink = new WebSocketLink({
	uri: `${process.env.WS_URL}`,
	options: {
		reconnect: true
	}
});

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
	if (graphQLErrors)
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);

	if (networkError) console.log(`[Network error]: ${networkError}`);

	if (response) response.errors = undefined;
});

const authLink = setContext(async (_, { headers }) => {
	const token = localStorage.getItem('token');

	if (token) {
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : ''
			}
		};
	}

	return null;
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		);
	},
	wsLink,
	from([errorLink, authLink, uploadLink as any])
);

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: splitLink
});
