import React from 'react';
import { withRouter } from 'react-router-dom';
import useStyles from './use-styles';
import { useMediaQuery } from 'react-responsive';
import { tabletSize } from 'helpers/breakpoints';
import Navigation from './navigation';
import Logo from './logo';
import Tools from './tools';
import Wrap from 'components/wrap';
import { CustomHashLink } from 'components/link';

import Headroom from 'react-headroom';

import { menu } from './menu';

function Header({ location }) {
	const styles = useStyles();

	const { pathname } = location;
	const contactUrl = `${pathname}#contact`;

	const isTabletOrMobile = useMediaQuery(tabletSize);

	return (
		<Headroom
			style={{
				WebkitTransition: 'all .5s ease-in-out',
				MozTransition: 'all .5s ease-in-out',
				OTransition: 'all .5s ease-in-out',
				transition: 'all .5s ease-in-out',
				zIndex: 10,
			}}>
			<div className={styles.header}>
				<Wrap>
					<div className={styles.headline}>
						{isTabletOrMobile && (
							<Tools onToggleMenu={() => setIsDrawerOpen(!isDrawerOpen)} />
						)}
						<Logo />
						<Navigation menu={menu} />
						<div className={styles.headlineAction}>
							<CustomHashLink
								url={contactUrl}
								title={'Contact us'}
								className={styles.customLink}
								smooth
							/>
						</div>
					</div>
				</Wrap>
			</div>
		</Headroom>
	);
}

export default withRouter(Header);
