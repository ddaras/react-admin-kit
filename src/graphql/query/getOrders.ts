import gql from 'graphql-tag';

const GET_ORDERS = gql`
	query getOrders {
		getOrders {
			id
			email
			amount
			status
			currency
			items {
				id
				title
				price
				currency
				files {
					id
					src
				}
			}
			createdAt
		}
	}
`;

export default GET_ORDERS;
