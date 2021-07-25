import React from 'react';
import { useHistory } from 'react-router-dom';

import Element from '@components/Element';
import Button from '@components/Button';
import Divider from '@components/Divider';
import Paper from '@modules/Paper';

const NotFound = () => {
	const history = useHistory();

	return (
		<Element
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
		>
			<Paper p={8}>
				<h1>Not found :(</h1>
				<Divider />
				<Button onClick={() => history.push('/')}>Back to Home</Button>
			</Paper>
		</Element>
	);
};

export default NotFound;
