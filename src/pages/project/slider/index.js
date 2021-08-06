import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { mobileSize } from 'helpers/breakpoints';
import useStyles from './use-styles';
import Wrap from 'components/wrap';
import Carousel from 'components/carousel';
import SlideItem from './item';
import { useSelector } from 'react-redux';

function TopSlider() {
	const styles = useStyles();
	const isMobile = useMediaQuery(mobileSize);
	const { project } = useSelector((state) => state.Project);
	const { imageKeys } = project;

	return (
		<Wrap>
			<Carousel
				slidesToShow={1}
				slidesToScroll={1}
				variableWidth={false}
				dots={isMobile}
				className={styles.customCarousel}>
				{imageKeys &&
					imageKeys.other.map((item, index) => {
						return <SlideItem key={`carousel-${index}`} image={item} />;
					})}
			</Carousel>
		</Wrap>
	);
}

export default TopSlider;
