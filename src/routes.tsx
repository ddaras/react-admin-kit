import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import loadable from '@loadable/component';

import LayoutLogin from '@modules/LayoutLogin';
import LayoutAdmin from '@modules/LayoutAdmin';

interface IAsyncPageProps {
	page: string;
}

export interface IRoute {
	path?: string;
	exact?: boolean;
	layout?: React.ReactNode;
	component: any;
	isPrivate?: boolean;
}

export const AsyncPage: any = loadable(
	(props: IAsyncPageProps): any =>
		import(/* webpackPrefetch: true */ `@containers/${props.page}`)
);

export const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		layout: LayoutAdmin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="Home" {...props} />
		),
		isPrivate: true
	},
	{
		path: '/account',
		exact: true,
		layout: LayoutAdmin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="Account" {...props} />
		),
		isPrivate: true
	},
	{
		path: '/login',
		exact: true,
		layout: LayoutLogin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="Login" {...props} />
		)
	},
	{
		path: '/products',
		exact: true,
		layout: LayoutAdmin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="Products" {...props} />
		),
		isPrivate: true
	},
	{
		path: '/products/new',
		exact: true,
		layout: LayoutAdmin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="NewProduct" {...props} />
		),
		isPrivate: true
	},
	{
		path: '/products/edit/:id',
		exact: true,
		layout: LayoutAdmin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="EditProduct" {...props} />
		),
		isPrivate: true
	},
	{
		path: '/orders',
		exact: true,
		layout: LayoutAdmin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="Orders" {...props} />
		),
		isPrivate: true
	},
	{
		path: '/orders/view/:id',
		exact: true,
		layout: LayoutAdmin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="ViewOrder" {...props} />
		),
		isPrivate: true
	}
];

export const router = [{ routes }];
