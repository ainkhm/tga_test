import React, { Fragment } from 'react';
import Wrap from 'components/wrap';
import OurVision from './vision';
import Solutions from './solutions';
import Story from './story';
import Form from 'components/form';
import { Header2 } from 'components/typography';

import useStyles from './use-styles';

function About() {
	return (
		<Fragment>
			<OurVision />
			<Solutions />
			<Story />
			<ContactForm />
		</Fragment>
	);
}

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

export default About;
