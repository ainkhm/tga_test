import React, { Fragment } from 'react';
import useStyles from './use-styles';
import { Header1 } from 'components/typography';
export default function Error() {
	const styles = useStyles();
	return (
		<div className={styles.errorWrap}>
			<p className={styles.errorHeader}>Error</p>
			<div className={styles.errorCode}>
				<span className={styles.errorSymbol}>4</span>
				<span className={styles.errorLogo}></span>
				<span className={styles.errorSymbol}>4</span>
			</div>
			<Header1 title='Page not found' className={styles.errorDecription} />
		</div>
	);
}
