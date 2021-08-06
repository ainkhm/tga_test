import * as C from '../types';

export const TechList = (state = { isFetching: true }, action) => {
	switch (action.type) {
		case C.FETCH_TECH_LIST:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_TECH_LIST:
			return { ...state, isFetching: false, payload: action.data };
		case C.ERROR_FETCH_TECH_LIST:
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

export const TechMains = (
	state = { technologies: { FE: [], BE: [], other: [] }, isFetching: true },
	action
) => {
	switch (action.type) {
		case C.FETCH_TECH_MAINS:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_TECH_MAINS:
			return { ...state, isFetching: false, technologies: action.data };
		case C.ERROR_FETCH_TECH_MAINS:
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
