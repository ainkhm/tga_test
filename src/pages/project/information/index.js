import React from 'react';
import { useSelector } from 'react-redux';
import { SpecificationProject } from 'components/specification';

function Information() {
	const { project } = useSelector((state) => state.Project);

	return <SpecificationProject {...project} />;
}

export default Information;
