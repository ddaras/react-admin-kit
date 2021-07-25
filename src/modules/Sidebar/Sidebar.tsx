import React from 'react';
import { useHistory } from 'react-router-dom';

import Element from '@components/Element';
import { IProps } from '@components/Element/styled';
import Text from '@components/Text';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import Menu from '@modules/Menu';
import MenuItem from '@modules/Menu/MenuItem';
import Row from '@modules/Grid/Row';
import Col from '@modules/Grid/Col';
import Avatar from '@modules/Avatar';
import Dropdown from '@modules/Dropdown';

import useAuth from '@/hooks/useAuth';

interface ISidebar extends IProps {
	handleLogout: () => void;
	menuItems: { icon: string; label: string; path: string }[];
}

const Sidebar = ({ handleLogout, menuItems, ...rest }: ISidebar) => {
	const history = useHistory();
	const { me } = useAuth();

	return (
		<Element {...rest}>
			<Row>
				<Col
					width={{ sm: 12 / 12 }}
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					{/* <Dropdown
						trigger={
							<Row>
								<Col width={{ sm: 3.4 / 12 }}>
									<Avatar src={me.picture} borderRadius="rounded" />
								</Col>
								<Col width={{ sm: 8.6 / 12 }}>
									<Text as="small" color="grey6">
										Welcome
									</Text>
									<Text as="h3" truncate>
										{me.firstName}
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
					/> */}

					<Menu display="flex" flexDirection="column" alignItems="center">
						<MenuItem to="/account" py={1}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center'
								}}
							>
								{me.picture ? (
									<Avatar
										src={`${process.env.CDN_URL}${me.picture}`}
										borderRadius="rounded"
									/>
								) : (
									<Avatar
										content={me.shopName?.charAt(0)}
										borderRadius="rounded"
									/>
								)}
								<Text
									as="small"
									truncate
									color={
										history.location.pathname === '/account'
											? 'indigo8'
											: 'grey7'
									}
								>
									{me.shopName}
								</Text>
							</div>
						</MenuItem>
					</Menu>

					<Divider isHidden size="lg" />

					<Element px={4} py={8}>
						<Menu display="flex" flexDirection="column" alignItems="center">
							{menuItems.map(item => (
								<MenuItem
									key={item.path}
									to={item.path}
									kind={
										history.location.pathname === item.path
											? 'primary'
											: 'ghost'
									}
									py={1}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center'
										}}
									>
										<Icon
											name={item.icon}
											size={28}
											strokeWidth={1}
											color={
												history.location.pathname === item.path
													? 'indigo8'
													: 'grey7'
											}
										/>
										<Text
											as="small"
											color={
												history.location.pathname === item.path
													? 'indigo8'
													: 'grey7'
											}
										>
											{item.label}
										</Text>
									</div>
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
	bg: 'grey1',
	display: 'flex',
	height: '100%',
	flexDirection: 'column',
	justifyContent: 'space-between'
	// boxShadow: 'inset -7px 0 9px -7px rgba(0,0,0,0.14)'
};

export default React.memo(Sidebar);
