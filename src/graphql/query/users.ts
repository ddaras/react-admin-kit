import gql from 'graphql-tag';

const USERS = gql`
	query users {
		users {
			data {
				id
				username
				email
				address {
					city
				}
				website
			}
		}
	}
`;

export default USERS;
