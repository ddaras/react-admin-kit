import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, ApolloError } from '@apollo/client';

import LoaderCentered from '@/modules/LoaderCentered';

import ME from '@graphql/query/me';
import Loader from '@/modules/Loader';

interface User {
	id?: string;
	email?: string;
	accessToken?: string;
	picture?: string;
	firstName?: string;
	shopName?: string;
	shopDescription?: string;
}

type Token = string;

interface AuthContextType {
	me: User;
	loading: boolean;
	called?: boolean;
	error?: ApolloError;
	login: (args?: Token) => void;
	logout: () => void;
	refetch: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
	me: {},
	loading: false,
	login: () => {},
	logout: () => {},
	refetch: () => {}
});

export const AuthProvider = ({ children }: any) => {
	const history = useHistory();
	const { data, loading, error, called, refetch } = useQuery(ME);

	const login = (token: string) => {
		localStorage.setItem('token', token);
	};

	const logout = () => {
		localStorage.removeItem('token');
	};

	if (error) {
		logout();
	}

	const value = {
		me: data ? data.me : {},
		called,
		loading,
		error,
		refetch,
		login,
		logout
	} as AuthContextType;

	React.useEffect(() => {}, []);

	if (loading) return <LoaderCentered />;

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => React.useContext(AuthContext);

export default useAuth;
