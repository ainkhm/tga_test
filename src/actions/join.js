import * as C from '../types';
import { get } from '../api';

export const getJoinInfo = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_JOIN_INFO,
	});
	try {
		const { data } = await get('/tga/getJoinInfo');
		dispatch({
			type: C.FINISHED_FETCH_JOIN_INFO,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_JOIN_INFO,
			error,
		});
	}
};
