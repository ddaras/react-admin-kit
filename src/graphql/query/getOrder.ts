import gql from 'graphql-tag';

const GET_ORDER = gql`
	query getOrder($id: ID!) {
		getOrder(id: $id) {
			id
			email
			amount
			status
			currency
			createdAt
		}
	}
`;

export default GET_ORDER;
