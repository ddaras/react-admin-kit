import * as React from 'react';
import { useLazyQuery, ApolloError } from '@apollo/client';

import ME from '@graphql/query/me';

interface User {
	id?: number;
	username: string;
}

type Token = string;

interface AuthContextType {
	me: User;
	loading: boolean;
	called?: boolean;
	error?: ApolloError;
	check: () => void;
	login: (args?: Token) => void;
	logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
	me: {
		username: ''
	},
	loading: false,
	check: () => {},
	login: () => {},
	logout: () => {}
});

export const AuthProvider = ({ children }: any) => {
	const [id, setId] = React.useState<string | null>(
		localStorage.getItem('token')
	);
	const [user, setUser] = React.useState<any>({});

	// fake data
	const [check, { loading, error, called }] = useLazyQuery(ME, {
		onCompleted: res => {
			if (res) {
				setUser(res.user);
			}
		}
	});

	const login = (token: string) => {
		setId(token);
		localStorage.setItem('token', token);
	};

	const logout = () => {
		setId(null);
		localStorage.removeItem('token');
	};

	const handleCheck = () => {
		check();
	};

	const value = {
		me: user,
		called,
		loading,
		error,
		check: handleCheck,
		login,
		logout
	} as AuthContextType;

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => React.useContext(AuthContext);

export default useAuth;
