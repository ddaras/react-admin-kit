import gql from 'graphql-tag';

const GET_ITEMS = gql`
	query getItems {
		getItems {
			id
			title
			price
			currency
			description
			files {
				id
				src
			}
		}
	}
`;

export default GET_ITEMS;
