import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrap from 'components/wrap';
import Form from 'components/form';
import { Header2 } from 'components/typography';
import Information from './information';
import Projects from './projects';
import Carousel from './carousel';

import { getTeamMember } from 'actions/team';
import { getProjectMember } from 'actions/project';

import useStyles from './use-styles';

const CrewMan = ({ match }) => {
	const dispatch = useDispatch();
	const memberId = match.params.id;
	const { member } = useSelector((state) => state.TeamMember);
	const id = member._id;

	const fetchTeamMember = useCallback(() => {
		dispatch(getTeamMember(memberId));
	}, [dispatch, memberId]);

	useEffect(() => {
		fetchTeamMember();
		id && dispatch(getProjectMember(id));
	}, [memberId, id]);

	const styles = useStyles();
	return (
		<section className={styles.crewMan}>
			<Information member={member} />
			<Projects />
			<Carousel member={member} />
			<ContactForm />
		</section>
	);
};

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

export default CrewMan;
