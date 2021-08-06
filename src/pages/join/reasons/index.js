import React from 'react';
import { useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import { Header2 } from 'components/typography';
import useStyles from './use-styles';
import Item from './item';

function Reasons() {
	const styles = useStyles();
	const { data } = useSelector((state) => state.JoinInfo);

	const reasons = data.reasons.map((item, index) => {
		return {
			icon: index,
			title: item.heading,
			description: item.info,
			id: item._id,
		};
	});

	return (
		<div className={styles.reasonsWrap}>
			<Wrap>
				<Header2 title='5 reasons to join TGA' />
				<div className={styles.reasons}>
					{reasons.map((item, index) => {
						return <Item key={item.id} {...item} />;
					})}
				</div>
			</Wrap>
		</div>
	);
}

export default Reasons;
