import * as C from '../types';

export const JoinInfo = (
	state = {
		data: { hiringProcess: [], openPositions: [], reasons: [] },
		isFetching: true,
	},
	action
) => {
	switch (action.type) {
		case C.FETCH_JOIN_INFO:
			return { ...state, isFetching: true };
		case C.FINISHED_FETCH_JOIN_INFO:
			return { ...state, isFetching: false, data: action.data };
		case C.ERROR_FETCH_JOIN_INFO:
			return {
				...state,
				isFetching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default JoinInfo;
