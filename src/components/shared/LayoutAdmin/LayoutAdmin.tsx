import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Element from '@components/elements/Element';
import Sidebar from '@components/shared/Sidebar';

import useAuth from '@/hooks/useAuth';

const menuItems = [
	{ label: 'Home', path: '/' },
	{ label: 'Products', path: '/products' },
	{ label: 'Settings', path: '/settings' }
];

const LayoutAdmin = ({ children }: any) => {
	const history = useHistory();

	const { logout } = useAuth();

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
