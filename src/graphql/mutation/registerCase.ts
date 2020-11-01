import gql from 'graphql-tag';

const REGISTER_CASE = gql`
	mutation registerCase($id: ID!, $input: RegisterCaseInput) {
		registerCase(id: $id, input: $input) {
			id
			number
		}
	}
`;

export default REGISTER_CASE;
