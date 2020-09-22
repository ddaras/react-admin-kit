import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'styled-system';

import ResetCss from '@/utilities/ResetCss';

import { routes, AsyncPage, IRoute } from './routes';

import baseTheme, { colors, Modes } from './theme';

const getTheme = (mode: keyof Modes) => {
	return { ...baseTheme, colors: colors[mode] } as Theme;
};

export const App = () => {
	const [colorMode, setColorMode] = React.useState<keyof Modes>('light');
	const theme = getTheme(colorMode);

	return (
		<ThemeProvider theme={theme}>
			<ResetCss />
			<Router>
				<Switch>
					{routes.map((r: IRoute) => (
						<Route
							key={r.path}
							path={r.path}
							exact={r.exact}
							component={r.component}
						/>
					))}
					<Route component={() => <AsyncPage page="NotFound" />} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};
