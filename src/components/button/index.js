import React from 'react';
import useStyles from './use-styles';
import clsx from 'clsx';

export default function Button(props) {
	const styles = useStyles();

	return (
		<button
			className={clsx(
				styles.button,
				props.dark && styles.darkButton,
				props.className,
			)}>
			{props.title}
		</button>
	);
}
