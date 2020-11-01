import gql from 'graphql-tag';

export default gql`
	mutation($file: Upload!) {
		uploadFile(file: $file) {
			id
			filename
			path
		}
	}
`;
