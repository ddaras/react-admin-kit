import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Element from '@components/Element';
import Sidebar from '@modules/Sidebar';

import useAuth from '@/hooks/useAuth';

const menuItems = [
	{ icon: 'PieChart', label: 'Dashboard', path: '/' },
	{ icon: 'Package', label: 'Orders', path: '/orders' },
	{ icon: 'Tag', label: 'Products', path: '/products' }
	// { label: 'Customers', path: '/customers' }
];

const LayoutAdmin = ({ children }: any) => {
	const history = useHistory();

	const { logout } = useAuth();

	const handleLogout = async () => {
		await logout();
		history.push('/login');
	};

	return (
		<Element>
			<Element position="fixed" top={0} left={0} bottom={0} width={110}>
				<Sidebar handleLogout={handleLogout} menuItems={menuItems} />
			</Element>
			<Element bg="grey0" ml={110} minHeight="100vh">
				{children}
			</Element>
		</Element>
	);
};

export default LayoutAdmin;
