import * as C from '../types';

export const ClientAll = (
	state = { clients: [], isFetching: true },
	action,
) => {
	switch (action.type) {
		case C.FETCH_CLIENT_ALL:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_CLIENT_ALL:
			return { ...state, isFetching: false, clients: action.data };
		case C.ERROR_FETCH_CLIENT_ALL:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const ClientList = (state = { isFetching: true }, action) => {
	switch (action.type) {
		case C.FETCH_CLIENT_LIST:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_CLIENT_LIST:
			return { ...state, isFetching: false, payload: action.data };
		case C.ERROR_FETCH_CLIENT_LIST:
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

export const ClientMains = (state = { isFetching: true }, action) => {
	switch (action.type) {
		case C.FETCH_CLIENT_MAINS:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_CLIENT_MAINS:
			return { ...state, isFetching: false, payload: action.data };
		case C.ERROR_FETCH_CLIENT_MAINS:
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

export const ClientProject = (
	state = { clientProject: [], isFetching: true },
	action,
) => {
	switch (action.type) {
		case C.FETCH_CLIENT_PROJECT:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_CLIENT_PROJECT:
			return { ...state, isFetching: false, clientProject: action.data };
		case C.ERROR_FETCH_CLIENT_PROJECT:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default {
	ClientAll,
	ClientList,
	ClientMains,
	ClientProject,
};
