import React from 'react';
import { useHistory } from 'react-router-dom';

import Element from '@components/elements/Element';
import Sidebar from '@components/shared/Sidebar';

import useMe from '@hooks/useMe';

const menuItems = [
	{ label: 'Cases', path: '/' },
	{ label: 'Requests', path: '/requests' }
];

const LayoutAdmin = ({ children }: any) => {
	const history = useHistory();

	const { logout } = useMe();

	const handleLogout = () => {
		logout();
		history.push('/login');
	};

	return (
		<Element>
			<Element position="fixed" top={0} left={0} bottom={0} width={260}>
				<Sidebar handleLogout={handleLogout} menuItems={menuItems} />
			</Element>
			<Element bg="grey0" ml={260} minHeight="100vh">
				{children}
			</Element>
		</Element>
	);
};

export default LayoutAdmin;
