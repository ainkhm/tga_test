import React from 'react';
import { useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import Advantage from 'components/advantage';

import { Header2 } from 'components/typography';

import useStyles from './use-styles';

function OurVision() {
	const styles = useStyles();
	const { data } = useSelector((state) => state.AboutInfo);
	return (
		<section className={styles.vision}>
			<Wrap>
				<Header2 title='Our visions and goals' />
				<div className={styles.goalsList}>
					{data.visions.map((item, index) => {
						return (
							<Advantage
								key={item._id}
								title={item.heading}
								description={item.info}
								src={require(`assets/icons/vision-icon-${index}.svg`)}
							/>
						);
					})}
				</div>
			</Wrap>
		</section>
	);
}

export default OurVision;
