import gql from 'graphql-tag';

const CASES = gql`
	query cases {
		cases {
			id
			number
			caseId
			avatarSrc
			pid
			historyNumber
			registrationDate
			closeDate
			type
			codeICD
			codeNCSP
			status
			createdAt
		}
	}
`;

export default CASES;
