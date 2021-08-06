import React from 'react';
import { Caption } from 'components/typography';
import useStyles from './use-styles';
import { baseURL } from 'api';

export default function DomainItem(props) {
	const styles = useStyles();
	return (
		<div
			className={styles.item}
			style={{
				backgroundImage: `url(${baseURL}/image/${props.url})`,
			}}>
			<div className={styles.innerWrap}>
				<Caption className={styles.captionStyle} title={props.title} />
				<div className={styles.itemHover}>
					{/* <span className={styles.itemHoverText}>
						{props.description}
						<img src={require('assets/icons/arrow-right.svg')} />
					</span> */}
				</div>
			</div>
		</div>
	);
}
