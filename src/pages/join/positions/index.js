import React from 'react';
import { useSelector } from 'react-redux';
import { Header2 } from 'components/typography';
import Wrap from 'components/wrap';
import { InfoCard } from 'components/cards';
import useStyles from './use-styles';

function Positions() {
	const { data } = useSelector((state) => state.JoinInfo);
	const styles = useStyles();

	return (
		<div className={styles.positionsWrap} id='positions'>
			<Wrap>
				<Header2 title='Open positions' />

				<div className={styles.positions}>
					{data.openPositions.map((item) => {
						return (
							<InfoCard
								key={item._id}
								title={item.name}
								requirements={item.requirements}
								link={item.link}
							/>
						);
					})}
				</div>
			</Wrap>
		</div>
	);
}

export default Positions;
