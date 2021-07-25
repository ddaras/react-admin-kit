import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'styled-system';
import LogRocket from 'logrocket';

import { GlobalStyles, ResetCSS } from '@/utilities/styles';
import { ToastProvider } from '@contexts/ToastContext';

import useAuth from '@/hooks/useAuth';

import { routes, AsyncPage, IRoute } from './routes';
import baseTheme, { colors, Modes } from './theme';

import './utilities/fonts.scss';

LogRocket.init('rezrp0/mmm');

const getTheme = (mode: keyof Modes) => {
	return { ...baseTheme, colors: colors[mode] } as Theme;
};

const PrivateRoute = ({
	layout: Layout,
	path,
	exact,
	component,
	isAuth
}: any) => {
	if (!isAuth) return <Redirect to="/login" />;

	return (
		<Layout>
			<Route path={path} exact={exact} component={component} />
		</Layout>
	);
};

const PublicRoute = ({ layout: Layout, path, exact, component }: any) => {
	return (
		<Layout>
			<Route path={path} exact={exact} component={component} />
		</Layout>
	);
};

const AppRoute = ({
	layout,
	path,
	exact,
	component,
	isPrivate,
	isAuth
}: any) => {
	return (
		<>
			{isPrivate ? (
				<PrivateRoute
					layout={layout}
					path={path}
					isAuth={isAuth}
					exact={exact}
					component={component}
				/>
			) : (
				<PublicRoute
					layout={layout}
					path={path}
					exact={exact}
					component={component}
				/>
			)}
		</>
	);
};

export const App = () => {
	const [colorMode, setColorMode] = React.useState<keyof Modes>('light');
	const theme = getTheme(colorMode);
	const { me } = useAuth();

	return (
		<ThemeProvider theme={theme}>
			<ResetCSS />
			<GlobalStyles />

			<ToastProvider>
				<Router>
					<Switch>
						{routes.map((route: IRoute) => (
							<AppRoute
								key={route.path}
								isAuth={Object.keys(me).length > 0}
								{...route}
							/>
						))}
						<Route component={() => <AsyncPage page="NotFound" />} />
					</Switch>
				</Router>
			</ToastProvider>
		</ThemeProvider>
	);
};
