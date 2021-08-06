import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from 'components/header';
import Content from 'components/content';
import Footer from 'components/footer';
import { ThemeProvider } from 'react-jss';
import rawTheme from './config/jss/theme';
import useLayout from 'hooks/use-layout';
import ScrollToTop from 'hooks/ScrollToTop';
import NotFoundPage from 'pages/error';
import { HelmetWrap } from 'components/helmet-wrap';

import { Switch, Route } from 'react-router-dom';
import * as routes from 'pages';

import { getProjectAll } from 'actions/project';
import { getAboutInfo } from 'actions/about';
import { getJoinInfo } from 'actions/join';
import { getTeamAll, getTeamCount } from 'actions/team';
import { getHomeInfo } from 'actions/home';
import { getDomainAll } from 'actions/domain';
import { getTechMains } from 'actions/tech';
import { getClientAll } from 'actions/client';

import { css } from '@emotion/react';
import PacmanLoader from 'react-spinners/PacmanLoader';

import useStyles from './config/jss/use-styles';

import 'assets/fonts/font-face.css';

function App({ showLayout }) {
	const classNames = useStyles();

	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				await dispatch(getProjectAll());
				await dispatch(getAboutInfo());
				await dispatch(getJoinInfo());
				await dispatch(getTeamAll());
				await dispatch(getHomeInfo());
				await dispatch(getTechMains());
				await dispatch(getTeamCount());
				await dispatch(getDomainAll());
				await dispatch(getClientAll());
			} catch (error) {
				console.log(`Error while data fetching: ${error}`);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return loading ? (
		<PacmanLoader
			color={'#118ae0'}
			loading={loading}
			css={override}
			size={25}
		/>
	) : (
		<div className={classNames.page}>
			<HelmetWrap title='TGA website' description='TGA website description' />
			<Header />
			<Content>
				<ScrollToTop />
				<Switch>
					<Route {...routes.home} />
					<Route {...routes.about} />
					<Route {...routes.clients} />
					<Route {...routes.project} />
					<Route {...routes.team} />
					<Route {...routes.crewman} />
					<Route {...routes.join} />
					<Route component={NotFoundPage} />
				</Switch>
			</Content>
			{showLayout && <Footer />}
		</div>
	);
}

export default function () {
	const showLayout = useLayout();
	let theme = { ...rawTheme };

	return (
		<ThemeProvider theme={theme}>
			<App showLayout={showLayout} />
		</ThemeProvider>
	);
}

const override = css`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
