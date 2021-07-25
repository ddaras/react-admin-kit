import gql from 'graphql-tag';

export default gql`
	mutation createItem($input: ItemInput!) {
		createItem(input: $input) {
			id
		}
	}
`;
