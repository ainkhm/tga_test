import React from 'react';
import { NavLink } from 'react-router-dom';

import useStyles from './use-styles';

export default function Navigation({ menu }) {
	const styles = useStyles();

	return (
		<ul className={styles.navigation}>
			{menu.map((item, index) => (
				<li key={`navigation-${index}`}>
					<Link {...item} className={styles.navigationItem} />
				</li>
			))}
		</ul>
	);
}

function Link(props) {
	if (props.route) {
		return (
			<NavLink
				to={props.route.getPath(props.routeParams || {})}
				className={props.className}
				exact={props.hasOwnProperty('exact') ? props.exact : props.route.exact}>
				{props.title}
			</NavLink>
		);
	} else {
		return (
			<a href={props.link} className={props.className}>
				{props.title}
			</a>
		);
	}
}
