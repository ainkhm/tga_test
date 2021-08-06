import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './use-styles';
import { useMediaQuery } from 'react-responsive';
import { tabletSize } from 'helpers/breakpoints';
import { Header1, Description1 } from 'components/typography';
import Button from 'components/button';

export default function Top() {
	const payload = useSelector((state) => state.HomeInfo);

	const styles = useStyles();

	const scrollDown = () => {
		const target = document.getElementById('services');
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	const isTabletOrMobile = useMediaQuery(tabletSize);
	return (
		<section className={styles.top}>
			<Header1 className={styles.topHeader} title={payload.slogan} />
			<Description1
				className={styles.topDescription}
				title={payload.description}
			/>
			<div className={styles.action}>
				<Button
					title='Discover more'
					dark={isTabletOrMobile}
					className={styles.customButton}
				/>
			</div>
			<div className={styles.bottom} onClick={scrollDown}>
				<img src={require('assets/icons/arrow-down.svg')} />
			</div>
		</section>
	);
}
