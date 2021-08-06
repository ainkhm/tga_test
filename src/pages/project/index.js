import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'components/form';
import Wrap from 'components/wrap';
import { Header2 } from 'components/typography';
import useStyles from './use-styles';
import Information from './information';
import TopSlider from './slider';
import Blog from './blog';
import Carousel from './carousel';

import { getProject } from 'actions/project';

export default function Project({ match }) {
	const styles = useStyles();

	const dispatch = useDispatch();
	const projectId = match.url.split('/')[2];

	const fetchProject = useCallback(
		() => dispatch(getProject(projectId)),
		[dispatch],
	);

	useEffect(() => {
		fetchProject();
	});

	return (
		<section className={styles.projectPage}>
			<Information />
			<TopSlider />
			<Blog />
			<Carousel />
			<ContactForm />
		</section>
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
