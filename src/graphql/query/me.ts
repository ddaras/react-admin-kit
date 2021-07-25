import gql from 'graphql-tag';

const ME = gql`
	query me {
		me {
			id
			accessToken
			picture
			firstName
			lastName
			username
			email
			currency
			shopName
			shopDescription
			shopLogo {
				src
			}
		}
	}
`;

export default ME;
