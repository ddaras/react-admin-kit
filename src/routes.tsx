import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import loadable from '@loadable/component';

interface IAsyncPageProps {
	page: string;
}

export interface IRoute {
	path?: string;
	exact?: boolean;
	component: any;
}

export const AsyncPage: any = loadable(
	(props: IAsyncPageProps): any =>
		import(/* webpackPrefetch: true */ `@/containers/${props.page}`)
);

export const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="Home" {...props} />
		)
	},
	{
		path: '/login',
		exact: true,
		component: (props: RouteComponentProps) => (
			<AsyncPage page="Login" {...props} />
		)
	}
];

export const router = [{ routes }];
