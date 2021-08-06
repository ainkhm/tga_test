import React from 'react';
import useStyles from './use-styles';
import clsx from 'clsx';

export function Header1(props) {
	const styles = useStyles();

	return (
		<h1 className={clsx(styles.header, props.className)}>{props.title}</h1>
	);
}
export function Header2(props) {
	const styles = useStyles();

	return (
		<h3 className={clsx(styles.header2, props.className)}>{props.title}</h3>
	);
}

export function Header3(props) {
	const styles = useStyles();

	return (
		<h5 className={clsx(styles.header3, props.className)}>{props.title}</h5>
	);
}

export function Header4(props) {
	const styles = useStyles();

	return (
		<h4 className={clsx(styles.header4, props.className)}>{props.title}</h4>
	);
}

export function Description1(props) {
	const styles = useStyles();

	return (
		<h1 className={clsx(styles.description, props.className)}>{props.title}</h1>
	);
}
export function Description3(props) {
	const styles = useStyles();

	return (
		<h6 className={clsx(styles.description3, props.className)}>
			{props.title}
		</h6>
	);
}
export function Description6(props) {
	const styles = useStyles();

	return (
		<h6 className={clsx(styles.description6, props.className)}>
			{props.title}
		</h6>
	);
}

export function Caption(props) {
	const styles = useStyles();

	return (
		<span className={clsx(styles.caption, props.className)}>{props.title}</span>
	);
}
