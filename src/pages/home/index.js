import React, { Fragment } from 'react';
import Top from './top';
import Serices from './services';
import Numbers from './numbers';
import Domain from './domain';
import Technology from './technology';
import ClientsCarousel from './clientsCarousel';
import Clients from './clients';
import ContactForm from './form';

function Home() {
	return (
		<Fragment>
			<Top />
			<Serices />
			<Numbers />
			<Domain />
			<Technology />
			<ClientsCarousel />
			<Clients />
			<ContactForm />
		</Fragment>
	);
}

export default Home;
