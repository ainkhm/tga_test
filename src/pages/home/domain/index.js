import React from 'react';
import { useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import { Header2, Description1 } from 'components/typography';
import SectorItem from './item';

import useStyles from './use-styles';

export default function Top() {
	const styles = useStyles();
	const payload = useSelector((state) => state.DomainAll);
	const payloadHome = useSelector((state) => state.HomeInfo);

	return (
		<section className={styles.domain}>
			<Wrap>
				<Header2
					title={payloadHome.sectorFieldName}
					className={styles.headerOffset}
				/>
				<Description1
					className={styles.descriptionOffset}
					title={payloadHome.sectorFieldDescription}
				/>
				<div className={styles.sectorList}>
					{payload.domains.map((item) => {
						return (
							<SectorItem
								key={item._id}
								title={item.name}
								description={'Discover Projects'}
								url={item.imageKey}
							/>
						);
					})}
				</div>
			</Wrap>
		</section>
	);
}
