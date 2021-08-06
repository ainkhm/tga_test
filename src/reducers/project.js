import * as C from '../types';

export const ProjectAll = (
	state = { projects: [], isFetching: true },
	action,
) => {
	switch (action.type) {
		case C.FETCH_PROJECT_ALL:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_PROJECT_ALL:
			return { ...state, isFetching: false, projects: action.data };
		case C.ERROR_FETCH_PROJECT_ALL:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const ProjectMember = (
	state = { projectMember: [], isFetching: true },
	action,
) => {
	switch (action.type) {
		case C.FETCH_PROJECT_MEMBER:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_PROJECT_MEMBER:
			return { ...state, isFetching: false, projectMember: action.data };
		case C.ERROR_FETCH_PROJECT_MEMBER:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const Project = (state = { project: [], isFetching: true }, action) => {
	switch (action.type) {
		case C.FETCH_PROJECT:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_PROJECT:
			return { ...state, isFetching: false, project: action.data };
		case C.ERROR_FETCH_PROJECT:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};
