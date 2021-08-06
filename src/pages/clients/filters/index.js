import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { mobileSize } from 'helpers/breakpoints';
import Wrap from 'components/wrap';
import { Header2 } from 'components/typography';
import Filters from 'components/filters';
import useStyles from './use-styles';

function ProjectFilters(props) {
	const styles = useStyles();

	const [active, setActive] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const isMobileQuery = useMediaQuery(mobileSize);

	useEffect(() => {
		setIsMobile(isMobileQuery);
	}, [isMobileQuery]);

	const onClick = () => (active ? setActive(false) : setActive(true));

	const technologies = [
		'Python',
		'Wordpress',
		'React',
		'.Net',
		'Episerver',
		'React Native',
		'AWS',
		'Html, CSS',
		'JS',
		'Ruby',
		'PHP',
	];
	const domain = [
		'Sport',
		'Leisure & Media',
		'Agency',
		'Recruitment',
		'Healthcare',
	];
	const type = ['Mobile', 'Web', 'Desktop'];

	return (
		<section className={styles.filters}>
			<Wrap>
				<Header2 title='Clients' />
				{isMobile ? (
					<div className={styles.filtersList}>
						<div className={styles.filtersHeader} onClick={onClick}>
							Filter
							<img
								src={require('assets/icons/chevron.svg')}
								style={{ rotate: '180deg' }}
							/>
						</div>
						{active && (
							<div className={styles.overlay}>
								<div className={styles.filtersList}>
									<div className={styles.filtersHeader} onClick={onClick}>
										Filter
										<img src={require('assets/icons/chevron.svg')} />
									</div>
									<Filters title='Technologies' data={technologies} />
									<Filters title='Domain' data={domain} />
									<Filters title='Type' data={type} />
								</div>
							</div>
						)}
					</div>
				) : (
					<div className={styles.filtersList}>
						<Filters title='Technologies' data={technologies} />
						<Filters title='Domain' data={domain} />
						<Filters title='Type' data={type} />
					</div>
				)}
			</Wrap>
		</section>
	);
}

export default ProjectFilters;
