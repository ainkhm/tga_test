import React from 'react';
import { useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import useStyles from './use-styles';

import { Header2 } from 'components/typography';
import ServiceItem from './item';

export default function Services() {
	const payload = useSelector((state) => state.HomeInfo);
	const styles = useStyles();

	return (
		<section id='services' className={styles.services}>
			<Wrap>
				<Header2 title='Services we provide' className={styles.headerOffset} />
				<div className={styles.servicesList}>
					{payload.services.map((item) => (
						<ServiceItem
							key={item._id}
							title={item.heading}
							description={item.info}
							link={'Explore our service'}
						/>
					))}
				</div>
			</Wrap>
		</section>
	);
}
