import gql from 'graphql-tag';

const ME = gql`
	query me {
		me {
			id
			username
			email
		}
	}
`;

export default ME;
