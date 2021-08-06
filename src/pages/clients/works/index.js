import React from 'react';
import { useSelector } from 'react-redux';
import Project from 'components/project';
import Wrap from 'components/wrap';
import useStyles from './use-styles';

function Works() {
	const styles = useStyles();

	const { clients } = useSelector((state) => state.ClientAll);

	return (
		<section className={styles.projects}>
			<Wrap>
				<div className={styles.projectsList}>
					{clients.map((item, index) => {
						return (
							<Project
								key={item._id}
								title={item.name}
								description={item.description}
								logo={item.logoKey}
								img={item.imageKeys.main}
								index={index}
							/>
						);
					})}
				</div>
			</Wrap>
		</section>
	);
}

export default Works;
