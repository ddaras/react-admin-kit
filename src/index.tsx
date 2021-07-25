import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import { AuthProvider } from '@/hooks/useAuth';

import { App } from './App';

import { client } from './apollo';

const renderApp = (Application: any) =>
	render(
		<ApolloProvider client={client}>
			<AuthProvider>
				<Application />
			</AuthProvider>
		</ApolloProvider>,
		document.getElementById('root')
	);

renderApp(App);

if (process.env.NODE_ENV === 'production') {
	import('offline-plugin/runtime').then(plugin => {
		plugin.install({
			onUpdateReady: () => plugin.applyUpdate(),
			onUpdated: () => window.location.reload()
		});
	});
}

if (process.env.NODE_ENV === 'development') {
	if (module.hot) {
		module.hot.accept();
	}
}
