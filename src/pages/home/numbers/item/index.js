import React from 'react';
import { CustomLink } from 'components/link';
import { Description1 } from 'components/typography';
import useStyles from './use-styles';

export default function NumberItem(props) {
	const styles = useStyles();
	return (
		<div className={styles.item}>
			<div>
				<div className={styles.number}>{props.number}</div>
				<Description1
					className={styles.description}
					title={props.description}
				/>
				<CustomLink title={props.link} url={props.url} />
			</div>
		</div>
	);
}
