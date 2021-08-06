import * as C from '../types';

const initialState = {
	clientsFieldDescription: '',
	description: '',
	peoplesText: '',
	projectCount: 0,
	projectsText: '',
	sectorFieldDescription: '',
	sectorFieldName: '',
	services: [],
	slogan: '',
	years: 0,
	yearsText: '',
	_id: 0,
	services: [],
};

export const HomeInfo = (state = initialState, action) => {
	switch (action.type) {
		case C.FETCH_HOME_INFO:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_HOME_INFO:
			return { ...state, isFetching: false, ...action.data };
		case C.ERROR_FETCH_HOME_INFO:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default HomeInfo;
