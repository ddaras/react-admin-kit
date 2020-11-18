import * as React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'styled-system';
import { ApolloProvider } from '@apollo/client';

import Loader from '@/components/modules/Loader';
import { GlobalFonts, GlobalStyles, ResetCSS } from '@/utilities/styles';
import { PrivateRoute } from '@/utilities/auth';
import useAuth, { AuthProvider } from '@/hooks/useAuth';
import { ToastProvider } from '@contexts/ToastContext';

import { routes, AsyncPage, IRoute } from './routes';
import baseTheme, { colors, Modes } from './theme';
import { client } from './apollo';

import './utilities/fonts.scss';

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
	const history = useHistory();
	const [user, setUser] = React.useState<any>({});

	const { me, loading, error, check, logout } = useAuth();

	React.useEffect(() => {
		if (error) {
			logout();
			history.push('/login');
		}
	}, [error]);

	React.useEffect(() => {
		check();
	}, []);

	if (loading)
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh'
				}}
			>
				<Loader />
			</div>
		);

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
			<AuthProvider>
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
			</AuthProvider>
		</ApolloProvider>
	);
};
