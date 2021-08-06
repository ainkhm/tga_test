import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { tabletSize } from 'helpers/breakpoints';
import useStyles from './use-styles';
import Carousel from 'components/carousel';
import Wrap from 'components/wrap';
import { Header1 } from 'components/typography';
import { ProjectCard } from 'components/cards';

const CrewCarousel = () => {
	const styles = useStyles();
	const isTabletOrMobile = useMediaQuery(tabletSize);
	//todo - uncomment line 15 when we will have enough projects amount
	// const slidesToShow = isTabletOrMobile ? 1 : 4;
	const slidesToShow = isTabletOrMobile ? 1 : 2;

	const { projects } = useSelector((state) => state.ProjectAll);

	return (
		<section className={styles.crewCarousel}>
			<Wrap>
				<Header1 title='Other projects' />
				<Carousel
					slidesToShow={slidesToShow}
					slidesToScroll={1}
					variableWidth={true}
					className={styles.customCarousel}>
					{projects.map((item) => {
						return (
							<ProjectCard
								key={item._id}
								description={item.title}
								icon={item.client.logoKey}
								image={item.imageKeys.main}
							/>
						);
					})}
				</Carousel>
			</Wrap>
		</section>
	);
};

export default CrewCarousel;
