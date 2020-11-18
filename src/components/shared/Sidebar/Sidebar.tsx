import React from 'react';
import { useHistory } from 'react-router-dom';

import Element from '@components/elements/Element';
import { IProps } from '@components/elements/Element/styled';
import Text from '@components/elements/Text';
import Divider from '@components/elements/Divider';
import Avatar from '@components/modules/Avatar';
import Dropdown from '@components/modules/Dropdown';
import Menu from '@components/collections/Menu';
import MenuItem from '@components/collections/Menu/MenuItem';
import Row from '@components/collections/Grid/Row';
import Col from '@components/collections/Grid/Col';

import useAuth from '@/hooks/useAuth';

interface ISidebar extends IProps {
	handleLogout: () => void;
	menuItems: { label: string; path: string }[];
}

const Sidebar = ({ handleLogout, menuItems, ...rest }: ISidebar) => {
	const history = useHistory();
	const { me, loading } = useAuth();

	return (
		<Element {...rest}>
			<Row>
				<Col width={{ sm: 12 / 12 }}>
					<Dropdown
						trigger={
							<Row>
								<Col width={{ sm: 3.4 / 12 }}>
									<Avatar
										src="https://pickaface.net/gallery/avatar/unr_hugo_201118_2136_95ceyb.png"
										borderRadius="rounded"
									/>
								</Col>
								<Col width={{ sm: 8.6 / 12 }}>
									<Text as="small" color="grey6">
										Welcome
									</Text>
									<Text as="h3" truncate>
										{!loading && me?.username}
									</Text>
								</Col>
							</Row>
						}
						content={
							<Menu>
								<MenuItem to="/settings">
									<Text as="h4">Settings</Text>
								</MenuItem>
								<MenuItem onClick={handleLogout}>
									<Text as="h4">Logout</Text>
								</MenuItem>
							</Menu>
						}
					/>

					<Divider isHidden size="lg" />

					<Element px={4} py={8}>
						<Menu>
							{menuItems.map(item => (
								<MenuItem
									key={item.path}
									to={item.path}
									kind={
										history.location.pathname === item.path
											? 'primary'
											: 'ghost'
									}
								>
									<Text as="h4">{item.label}</Text>
								</MenuItem>
							))}
						</Menu>
					</Element>
				</Col>
			</Row>
		</Element>
	);
};

Sidebar.defaultProps = {
	p: 3,
	display: 'flex',
	height: '100%',
	flexDirection: 'column',
	justifyContent: 'space-between'
};

export default React.memo(Sidebar);
