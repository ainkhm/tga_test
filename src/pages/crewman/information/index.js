import React from 'react';
import { Specification } from 'components/specification';

function Information({ member }) {
	return (
		<Specification
			title={'Work and projects'}
			heading={member.name}
			description={member.bio}
			details={member.workedOn}
		/>
	);
}

export default Information;
