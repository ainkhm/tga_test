import React from 'react';
import { useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import { Header2, Description1 } from 'components/typography';
import Tabs from 'components/tabs';

import useStyles from './use-styles';

export default function Technology() {
	const styles = useStyles();

	const { technologies } = useSelector((state) => state.TechMains);

	const tabs = [
		{
			title: 'Front-End',
			tech: technologies.FE,
			link: 'Learn more',
			id: 0,
		},
		{
			title: 'Back End',
			tech: technologies.BE,
			link: 'Learn more',
			id: 1,
		},
		{
			title: 'Other technologies',
			tech: technologies.other,
			link: 'Learn more',
			id: 2,
		},
	];

	return (
		<section className={styles.tech}>
			<Wrap>
				<Header2 title='Technology stack' />
				<Description1
					className={styles.descriptionOffset}
					title='Main technologies we use, but always expanding our stack'
				/>
				<Tabs data={tabs} />
			</Wrap>
		</section>
	);
}
