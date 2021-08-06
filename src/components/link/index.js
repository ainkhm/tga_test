import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useStyles from './use-styles';
import clsx from 'clsx';

export function CustomLink({ url, title, white, className }) {
	const styles = useStyles();

	return (
		<Link
			to={url}
			className={clsx(styles.link, white && styles.linkWhite, className)}>
			{title}
		</Link>
	);
}

export const CustomHashLink = ({ url, title, className, smooth }) => {
	const styles = useStyles();

	return (
		<HashLink
			to={url}
			className={clsx(styles.hashLink, className)}
			smooth={smooth}>
			{title}
		</HashLink>
	);
};
