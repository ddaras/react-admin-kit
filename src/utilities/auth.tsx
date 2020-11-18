import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import useAuth from '@/hooks/useAuth';

export const PrivateRoute = (props: any) => {
	const { logout } = useAuth();

	if (!localStorage.getItem('token')) {
		return <Redirect to="/" />;
	}

	return <Route {...props} />;
};
