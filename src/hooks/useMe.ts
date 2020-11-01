import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import ME from '@graphql/query/me';

const useMe = () => {
	const history = useHistory();
	const { data, loading, error, refetch } = useQuery(ME);

	const login = (token: string) => {
		localStorage.setItem('token', token);
		history.push('/');
	};

	const logout = () => {
		localStorage.removeItem('token');
		history.push('/login');
	};

	return { me: data ? data.me : null, loading, error, refetch, login, logout };
};

export default useMe;
