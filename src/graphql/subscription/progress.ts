import gql from 'graphql-tag';

const PROGRESS = gql`
	subscription progress {
		progress {
			id
			value
			error {
				message
			}
		}
	}
`;

export default PROGRESS;
