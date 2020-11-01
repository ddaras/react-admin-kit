import gql from 'graphql-tag';

const CLOSE_CASE = gql`
	mutation closeCase($id: ID!, $input: CloseCaseInput) {
		closeCase(id: $id, input: $input) {
			id
			number
		}
	}
`;

export default CLOSE_CASE;
