import gql from 'graphql-tag';

const ME = gql`
	query me {
		me {
			id
			username
			firstName
			lastName
		}
	}
`;

export default ME;
