import * as C from '../types';

export const TeamList = (state = { isFetching: true }, action) => {
	switch (action.type) {
		case C.FETCH_TEAM_LIST:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_TEAM_LIST:
			return { ...state, isFetching: false, payload: action.data };
		case C.ERROR_FETCH_TEAM_LIST:
			return {
				...state,
				payload: [],
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const TeamAll = (state = { team: [], isFetching: true }, action) => {
	switch (action.type) {
		case C.FETCH_TEAM_ALL:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_TEAM_ALL:
			return { ...state, isFetching: false, team: action.data };
		case C.ERROR_FETCH_TEAM_ALL:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const TeamCounter = (state = { count: 0, isFetching: true }, action) => {
	switch (action.type) {
		case C.FETCH_TEAM_COUNT:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_TEAM_COUNT:
			return { ...state, isFetching: false, count: action.data };
		case C.ERROR_FETCH_TEAM_COUNT:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const TeamMember = (
	state = { member: [], isFetching: true },
	action
) => {
	switch (action.type) {
		case C.FETCH_TEAM_MEMBER:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_TEAM_MEMBER:
			return { ...state, isFetching: false, member: action.data };
		case C.ERROR_FETCH_TEAM_MEMBER:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};
