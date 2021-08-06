import App from './app';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import jss from 'jss';
import preset from 'jss-preset-default';
import {
	JssProvider,
	ThemeProvider,
	SheetsRegistry,
	createGenerateId,
} from 'react-jss';

import theme from './config/jss/theme';
import defaultUnit from './config/jss/default-unit';
import configureStore from './store';

jss.setup(
	preset({
		defaultUnit,
	}),
);

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
	.disable('x-powered-by')
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.get('/*', (req, res) => {
		const context = {};
		const store = configureStore({ test: 'sdfds' });

		const markup = renderToString(
			<ReduxProvider store={store}>
				<StaticRouter location={req.url} context={context}>
					<JssProvider jss={jss} registry={sheets} generateId={generateId}>
						<ThemeProvider theme={theme}>
							<App />
						</ThemeProvider>
					</JssProvider>
				</StaticRouter>
			</ReduxProvider>,
		);

		const sheets = new SheetsRegistry();
		const generateId = createGenerateId();

		if (context.url) {
			res.redirect(context.url);
		} else {
			res.status(200).send(
				`<!doctype html>
                    <html lang="en">
                    <head>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta charset="utf-8" />
                        <title>TGA - website</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
                        <link rel="apple-touch-icon" sizes="180x180" href="${
													process.env.CLIENT_PUBLIC_PATH || '/'
												}apple-touch-icon.png">
                        <link rel="icon" type="image/png" sizes="32x32" href="${
													process.env.CLIENT_PUBLIC_PATH || '/'
												}favicon-32x32.png">
                        <link rel="icon" type="image/png" sizes="16x16" href="${
													process.env.CLIENT_PUBLIC_PATH || '/'
												}favicon-16x16.png">
                        <link rel="manifest" href="${
													process.env.CLIENT_PUBLIC_PATH || ''
												}/site.webmanifest">
                        <style type="text/css">${sheets.toString()}</style>
                        ${
													assets.client.css
														? `<link rel="stylesheet" href="${assets.client.css}">`
														: ''
												}
                        ${
													process.env.NODE_ENV === 'production'
														? `<script src="${assets.client.js}" defer></script>`
														: `<script src="${assets.client.js}" defer crossorigin></script>`
												}
                    </head>
                    <body>
                        <div id="root"></div>
                    </body>
                </html>`,
			);
		}
	});

export default server;
