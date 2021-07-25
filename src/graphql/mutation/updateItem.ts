import gql from 'graphql-tag';

export default gql`
	mutation updateItem($id: ID!, $input: ItemInput!) {
		updateItem(id: $id, input: $input) {
			id
		}
	}
`;
