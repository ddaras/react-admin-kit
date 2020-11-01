import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import loadable from '@loadable/component';

import LayoutLogin from '@components/shared/LayoutLogin';
import LayoutAdmin from '@components/shared/LayoutAdmin';

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
		import(/* webpackPrefetch: true */ `@/containers/${props.page}`)
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
		path: '/settings',
		exact: true,
		layout: LayoutAdmin,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="Settings" {...props} />
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
	}
];

export const router = [{ routes }];
