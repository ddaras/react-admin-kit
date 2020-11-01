import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'styled-system';
import { ApolloProvider } from '@apollo/client';

import './utilities/fonts.scss';

import { GlobalFonts, GlobalStyles, ResetCSS } from '@/utilities/styles';
import { PrivateRoute } from '@/utilities/auth';

import { routes, AsyncPage, IRoute } from './routes';

import baseTheme, { colors, Modes } from './theme';

import useMe from '@hooks/useMe';

import { ToastProvider } from '@contexts/ToastContext';

import { client } from './apollo';

const getTheme = (mode: keyof Modes) => {
	return { ...baseTheme, colors: colors[mode] } as Theme;
};

const AppRoute = ({
	layout: Layout,
	path,
	exact,
	component,
	isPrivate
}: any) => {
	const { me, loading, error, logout } = useMe();

	React.useEffect(() => {
		if (error) {
			logout();
		}
	}, [loading, me]);

	if (loading) return <div>Loading...</div>;

	return (
		<Layout>
			{isPrivate ? (
				<PrivateRoute path={path} exact={exact} component={component} />
			) : (
				<Route path={path} exact={exact} component={component} />
			)}
		</Layout>
	);
};

export const App = () => {
	const [colorMode, setColorMode] = React.useState<keyof Modes>('light');
	const theme = getTheme(colorMode);

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				{/* <GlobalFonts /> */}
				<ResetCSS />
				<GlobalStyles />

				<ToastProvider>
					<Router>
						<Switch>
							{routes.map((route: IRoute) => (
								<AppRoute key={route.path} {...route} />
							))}
							<Route component={() => <AsyncPage page="NotFound" />} />
						</Switch>
					</Router>
				</ToastProvider>
			</ThemeProvider>
		</ApolloProvider>
	);
};
