import gql from 'graphql-tag';

const ME = gql`
	query user($id: ID!) {
		user(id: $id) {
			id
			username
		}
	}
`;

export default ME;
