import React from 'react';
import { useSelector } from 'react-redux';
import Project from 'components/project';
import Wrap from 'components/wrap';
import useStyles from './use-styles';

const Projects = () => {
	const styles = useStyles();

	const { projectMember } = useSelector((state) => state.ProjectMember);

	return (
		<section className='projects'>
			<Wrap>
				<div className={styles.projectList}>
					{projectMember.map((item, index) => {
						return (
							<Project
								key={item._id}
								title={item.title}
								description={item.description}
								logo={item.client.logoKey}
								img={item.imageKeys.main}
								client={item.client.name}
								sector={item.sector.name}
								type={item.type}
								stack={item.technologies}
								team={item.team}
								path={item.slug}
								index={index}
							/>
						);
					})}
				</div>
			</Wrap>
		</section>
	);
};

export default Projects;
