import React from 'react';
import { baseURL } from 'api';
import useStyles from './use-styles';

function SliderItem({ image }) {
	const styles = useStyles();

	const img = `${baseURL}/image/${image}`;

	return (
		<div
			className={styles.item}
			style={{ backgroundImage: `url(${img})` }}></div>
	);
}

export default SliderItem;
