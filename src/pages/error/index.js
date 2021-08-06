import React from 'react';
import useStyles from './use-styles';
import Error from 'components/error';
import Wrap from 'components/wrap';

export default function NotFound() {
	const styles = useStyles();
	return (
		<section className={styles.errorPage}>
			<Error />
		</section>
	);
}
