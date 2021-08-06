import React, { Fragment } from 'react';
import Wrap from 'components/wrap';
import Form from 'components/form';
import { Header2 } from 'components/typography';
import Works from './works';
import Filters from './filters';
import useStyles from './use-styles';

function Clients() {
	return (
		<Fragment>
			{/* <Filters /> */}
			<Works />
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

export default Clients;
