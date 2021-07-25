import gql from 'graphql-tag';

export default gql`
	mutation updateUser($id: ID!, $input: UserInput!) {
		updateUser(id: $id, input: $input) {
			id
		}
	}
`;
