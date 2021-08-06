import * as C from '../types';

export const AboutInfo = (
	state = { data: { help: [], visions: [], timeLine: [] }, isFetching: true },
	action
) => {
	switch (action.type) {
		case C.FETCH_ABOUT_INFO:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_ABOUT_INFO:
			return { ...state, isFetching: false, data: action.data };
		case C.ERROR_FETCH_ABOUT_INFO:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default AboutInfo;
