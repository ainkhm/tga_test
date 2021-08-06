import App from './app';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';

import { BrowserRouter } from 'react-router-dom';
import jss from 'jss';
import preset from 'jss-preset-default';
import { JssProvider } from 'react-jss';

import defaultUnit from './config/jss/default-unit';

jss.setup(
	preset({
		defaultUnit,
	})
);

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
	<ReduxProvider store={store}>
		<BrowserRouter>
			<JssProvider jss={jss}>
				<App />
			</JssProvider>
		</BrowserRouter>
	</ReduxProvider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
