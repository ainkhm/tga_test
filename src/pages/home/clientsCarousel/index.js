import React from 'react';
import { useSelector } from 'react-redux';
import { CustomHashLink } from 'components/link';
import { useMediaQuery } from 'react-responsive';
import { mobileSize, tabletSize } from 'helpers/breakpoints';
import { Header2, Description1 } from 'components/typography';
import Wrap from 'components/wrap';
import SlideItem from './item';
import Carousel from 'components/carousel';

import useStyles from './use-styles';

const ClientsCarousel = () => {
	const styles = useStyles();
	const payload = useSelector((state) => state.ClientAll);
	const isMobile = useMediaQuery(mobileSize);
	const isTablet = useMediaQuery(tabletSize);
	const slidesToShow = isMobile ? 2 : isTablet ? 3 : 4;

	return (
		<section className={styles.clients}>
			<Wrap>
				<div className={styles.clientsWrap}>
					<div className={styles.headWrap}>
						<Header2 className={styles.topHeader} title='Main clients' />
						<Description1
							className={styles.topDescription}
							title={payload.clientsFieldDescription}
						/>
					</div>
					<div className={styles.action}>
						<CustomHashLink
							smooth
							url={'/#contact'}
							className={styles.customLink}
							title='Become a client'
						/>
					</div>
				</div>
				<div className={styles.clientsSlider}>
					<Carousel
						slidesToShow={slidesToShow}
						slidesToScroll={1}
						variableWidth={false}
						autoPlay>
						{payload.clients.map((item) => (
							<SlideItem key={item._id} path={item.logoKey} url={item.slug} />
						))}
					</Carousel>
				</div>
				{isMobile && (
					<CustomHashLink
						smooth
						url={'/#contact'}
						className={styles.customLink}
						title='Become a client'
					/>
				)}
			</Wrap>
		</section>
	);
};

export default ClientsCarousel;
