import React from 'react';
import useStyles from './use-styles';

export default function Wrap(props) {
	const styles = useStyles();

	return <div className={styles.wrap}>{props.children}</div>;
}
