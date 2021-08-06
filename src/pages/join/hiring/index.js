import React from 'react';
import { useSelector } from 'react-redux';
import { Header2 } from 'components/typography';
import Wrap from 'components/wrap';

import useStyles from './use-styles';

function HiringProcess() {
	const { data } = useSelector((state) => state.JoinInfo);
	const styles = useStyles();

	return (
		<div className={styles.hiringWrap}>
			<Wrap>
				<Header2 title='Our hiring process' />
				<div className={styles.process}>
					{data.hiringProcess.map((item) => {
						return (
							<div className={styles.processStep} key={item._id}>
								<div className={styles.icon}></div>
								<div className={styles.counter}>{item.step}</div>
								<div className={styles.name}>{item.title}</div>
							</div>
						);
					})}
				</div>
			</Wrap>
		</div>
	);
}

export default HiringProcess;
