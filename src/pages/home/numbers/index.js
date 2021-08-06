import React from 'react';
import { useSelector } from 'react-redux';
import { Header2 } from 'components/typography';
import NumberItem from './item';
import Wrap from 'components/wrap';

import useStyles from './use-styles';

export default function Numbers() {
	const styles = useStyles();
	const payload = useSelector((state) => state.HomeInfo);
	const teamCounter = useSelector((state) => state.TeamCounter);

	const items = [
		{
			number: payload.years,
			description: payload.yearsText,
			url: '/about',
			id: 0,
		},
		{
			number: payload.projectCount,
			description: payload.projectsText,
			url: '/clients',
			id: 1,
		},
		{
			number: teamCounter.count,
			description: payload.peoplesText,
			url: '/team',
			id: 2,
		},
	];

	return (
		<section className={styles.numbers}>
			<Wrap>
				<Header2 className={styles.headerOffest} title='TGA Numbers' />
				<div className={styles.numbersList}>
					{items.map((item) => (
						<NumberItem
							key={item.id}
							number={item.number}
							description={item.description}
							link={'Learn more'}
							url={item.url}
						/>
					))}
				</div>
			</Wrap>
		</section>
	);
}
