import gql from 'graphql-tag';

export default gql`
	mutation($id: ID!) {
		parseCsv(id: $id)
	}
`;
