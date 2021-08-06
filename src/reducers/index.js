import { combineReducers } from 'redux';
import AboutInfo from './about';
import HomeInfo from './home';
import JoinInfo from './join';
import { TeamAll, TeamCounter, TeamMember } from './team';
import { ClientAll, ClientProject } from './client';
import { DomainAll } from './domain';
import { TechMains } from './tech';
import { ProjectAll, ProjectMember, Project } from './project';

const rootReducer = combineReducers({
	AboutInfo,
	HomeInfo,
	TeamCounter,
	ClientAll,
	ClientProject,
	TeamAll,
	DomainAll,
	JoinInfo,
	TechMains,
	TeamMember,
	ProjectAll,
	ProjectMember,
	Project,
});

export default rootReducer;
