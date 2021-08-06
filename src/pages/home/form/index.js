import React from 'react';
import Wrap from 'components/wrap';
import { Header2 } from 'components/typography';
import Form from 'components/form';

import useStyles from './use-styles';

export default function ContactForm() {
	const styles = useStyles();

	return (
		<section className={styles.mainForm} id='contact'>
			<Wrap>
				<Header2 title='Get in touch' />
				<Form />
			</Wrap>
		</section>
	);
}
