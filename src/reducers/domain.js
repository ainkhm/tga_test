import * as C from '../types';

const initialState = { domains: [] };

export const DomainList = (state = { isFetching: true }, action) => {
	switch (action.type) {
		case C.FETCH_DOMAIN_LIST:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_DOMAIN_LIST:
			return { ...state, isFetching: false, ...action.data };
		case C.ERROR_FETCH_DOMAIN_LIST:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const DomainAll = (state = initialState, action) => {
	switch (action.type) {
		case C.FETCH_DOMAIN_ALL:
			return { ...state };
		case C.FINISHED_FETCH_DOMAIN_ALL:
			return { ...state, isFetching: false, domains: action.data };
		case C.ERROR_FETCH_DOMAIN_ALL:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};
