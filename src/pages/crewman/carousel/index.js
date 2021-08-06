import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStyles from './use-styles';
import { useMediaQuery } from 'react-responsive';
import { mobileSize, tabletSize } from 'helpers/breakpoints';
import calcBgNo from 'helpers/calcBgNo';
import Carousel from 'components/carousel';
import Wrap from 'components/wrap';
import { Header1 } from 'components/typography';
import { CrewCard } from 'components/cards';

const CrewCarousel = ({ member }) => {
	const styles = useStyles();
	const { team } = useSelector((state) => state.TeamAll);

	const isMobile = useMediaQuery(mobileSize);
	const isTablet = useMediaQuery(tabletSize);

	const [width, setWidth] = useState(false);

	const { workedOn } = member;

	const rolesArr = workedOn && workedOn.map((item) => item.position);
	const rolesString = rolesArr && rolesArr.join('s, ');

	const accounts = [];

	team.forEach((account) => {
		const roles = account.workedOn.map((spot) => spot.position);
		const found = rolesArr
			? rolesArr.some((role) => roles.includes(role))
			: false;
		found && account._id !== member._id && accounts.push(account);
	});

	const slidesToShow = isMobile
		? 1
		: isTablet
		? 2
		: accounts.length > 3
		? 4
		: accounts.length;

	useEffect(() => {
		setWidth(isMobile);
	}, []);

	return (
		<section className={styles.crewCarousel}>
			<Wrap>
				{rolesString && (
					<Header1 title={`Other ${rolesString}s in our company`} />
				)}
				<Carousel
					slidesToShow={slidesToShow}
					slidesToScroll={1}
					variableWidth={width}
					className={styles.customCarousel}>
					{accounts.map((item, index) => {
						return (
							<CrewCard
								name={item.name}
								bio={item.roles}
								photos={[item.imageKeys.professional, item.imageKeys.smiley]}
								url={item.slug}
								index={index}
								key={item._id}
								bgNo={calcBgNo(index, 6)}
							/>
						);
					})}
				</Carousel>
			</Wrap>
		</section>
	);
};

export default CrewCarousel;
