import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const renderApp = (Application: any) => render(<Application />, document.getElementById('root'));

renderApp(App);

if (process.env.NODE_ENV === 'development') {
	if (module.hot) {
		module.hot.accept();
	}
}
