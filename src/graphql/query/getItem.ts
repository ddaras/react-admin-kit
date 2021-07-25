import gql from 'graphql-tag';

const GET_ITEM = gql`
	query getItem($id: ID!) {
		getItem(id: $id) {
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

export default GET_ITEM;
