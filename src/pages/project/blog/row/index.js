import React from 'react';
import { Description1 } from 'components/typography';
import clsx from 'clsx';
import useStyles from './use-styles';

function BlogRow({ title, image }) {
	const styles = useStyles();

	return (
		<div className={styles.blogRow}>
			<div className={clsx(styles.blogBlock, styles.text)}>
				<Description1 className={styles.customText} title={title} />
			</div>
			<div
				className={clsx(styles.blogBlock, styles.image)}
				style={{
					backgroundImage: `url(${image})`,
				}}></div>
		</div>
	);
}

export default BlogRow;
