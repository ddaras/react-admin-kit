import gql from 'graphql-tag';

// just faking. real mutation should be login with input credentials returning user token
const LOGIN = gql`
	mutation updateUser($id: ID!, $input: UpdateUserInput!) {
		updateUser(id: $id, input: $input) {
			id
		}
	}
`;

export default LOGIN;
