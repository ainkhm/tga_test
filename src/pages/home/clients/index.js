import React from 'react';
import { useSelector } from 'react-redux';
import { Header2 } from 'components/typography';
import Wrap from 'components/wrap';
import Project from 'components/project';
import { CustomLink } from 'components/link';

import useStyles from './use-styles';

export default function Clients() {
	const styles = useStyles();
	const { clients } = useSelector((state) => state.ClientAll);
	const firstTwoClients = clients.slice(0, 2);

	return (
		<section className={styles.projects}>
			<Wrap>
				<Header2 className={styles.topHeader} title='Clients' />
				<div className={styles.projectList}>
					{firstTwoClients.map((item, index) => (
						<Project
							key={item._id}
							title={item.name}
							description={item.description}
							logo={item.logoKey}
							img={item.imageKeys.main}
							index={index}
						/>
					))}
				</div>
				<div className={styles.bottomLink}>
					<CustomLink title='Show all clients' url='/clients' />
				</div>
			</Wrap>
		</section>
	);
}
