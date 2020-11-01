import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import useMe from '@hooks/useMe';

export const PrivateRoute = (props: any) => {
	const { logout } = useMe();

	if (!localStorage.getItem('token')) {
		logout();
		return null;
	}

	return <Route {...props} />;
};
