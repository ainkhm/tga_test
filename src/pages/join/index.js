import React from 'react';
import Form from 'components/form';
import Wrap from 'components/wrap';
import { Header2 } from 'components/typography';
import Reasons from './reasons';
import Positions from './positions';
import HiringProcess from './hiring';
import useStyles from './use-styles';

function JoinUs() {
	const styles = useStyles();

	return (
		<section className={styles.joinUs}>
			<Reasons />
			<Positions />
			<HiringProcess />
			<ContactForm />
		</section>
	);
}

export default JoinUs;

function ContactForm() {
	const styles = useStyles();
	return (
		<div id='contact' className={styles.contacts}>
			<Wrap>
				<Header2 title='Get in touch' />
				<Form />
			</Wrap>
		</div>
	);
}
