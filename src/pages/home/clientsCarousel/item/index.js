import React from 'react';
import { CustomLink } from 'components/link';
import useStyles from './use-styles';
import { baseURL } from 'api';

export default function SlideItem(props) {
	const styles = useStyles();

	return (
		<div className={styles.slideItem}>
			<div
				className={styles.logo}
				style={{
					backgroundImage: `url(${baseURL}/image/${props.path})`,
				}}></div>

			<CustomLink
				className={styles.linkHover}
				title='Show more'
				url='/clients'
			/>
		</div>
	);
}
