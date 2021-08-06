import React from 'react';
import { useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import Tabs from 'components/tabs';
import useStyles from './use-styles';
import { Header2, Description1 } from 'components/typography';

function Solutions() {
	const { data } = useSelector((state) => state.AboutInfo);
	const styles = useStyles();

	const tabs = data.help.map((item) => {
		return {
			title: item.heading,
			description: item.info,
			id: item._id,
		};
	});

	return (
		<section className={styles.solutions}>
			<Wrap>
				<Header2 title='How TGA can help you' />
				<Description1
					className={styles.captionOffset}
					title='Different solutions and high quality service'
				/>
				<Tabs data={tabs} solutions />
			</Wrap>
		</section>
	);
}

export default Solutions;
