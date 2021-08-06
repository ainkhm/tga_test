import React, { Fragment } from 'react';
import { Header3, Description3 } from 'components/typography';
import useStyles from './use-styles';

function Reason({ title, description, icon }) {
	const styles = useStyles();
	return (
		<Fragment>
			<div className={styles.reason}>
				<img src={require(`assets/icons/reasons-icon-${icon}.svg`)} />
				<div className={styles.infoWrap}>
					<Header3 title={title} className={styles.customHeader} />
					<Description3 title={description} className={styles.customDesc} />
				</div>
			</div>
		</Fragment>
	);
}

export default Reason;
