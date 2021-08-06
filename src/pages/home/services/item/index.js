import React from 'react';
import useStyles from './use-styles';
import { Description6, Header4 } from 'components/typography';
import { CustomLink } from 'components/link';

export default function ServiceItem(props) {
	const styles = useStyles();
	return (
		<div className={styles.item}>
			<Header4 title={props.title} className={styles.headerOffest} />
			<Description6 title={props.description} />
			<div className={styles.itemHover}>
				<div className={styles.itemBottom}>
					<CustomLink title={props.link} white url='/#' />
				</div>
			</div>
		</div>
	);
}
