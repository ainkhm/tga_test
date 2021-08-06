import React from 'react';

import { Header3, Description3 } from 'components/typography';

import useStyles from './use-styles';

function Advantage(props) {
	const styles = useStyles();
	return (
		<div className={styles.advantage}>
			<img className={styles.icon} src={props.src} />
			<Header3 className={styles.header} title={props.title} />
			<Description3 className={styles.description} title={props.description} />
		</div>
	);
}
export default Advantage;
