import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import { Header2 } from 'components/typography';
import { useMediaQuery } from 'react-responsive';
import { DragScroll } from 'helpers/dragScroll';
import { mobileSize } from 'helpers/breakpoints';
import useStyles from './use-styles';

function OurStory() {
	const isMobile = useMediaQuery(mobileSize);

	const ref = useRef(null);

	useEffect(() => {
		const divElement = ref.current;
		!isMobile && DragScroll(divElement);
	}, [isMobile]);

	const styles = useStyles();

	const { data } = useSelector((state) => state.AboutInfo);

	return (
		<section className={styles.story}>
			<Wrap>
				<Header2 title='Story of TGA and Founders' />
				<div className={styles.timelineWrap}>
					<div ref={ref} id='timeline' className={styles.timeline}>
						<ol>
							{data.timeLine.map((item) => (
								<li key={item._id}>
									<span className={styles.circle}></span>
									<div className={styles.info}>
										<span className={styles.year}>{item.time}</span>
										<p className={styles.text}>{item.info}</p>
									</div>
								</li>
							))}
						</ol>
					</div>
				</div>
			</Wrap>
		</section>
	);
}

export default OurStory;
