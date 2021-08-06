import * as C from '../types';
import { get } from '../api';

export const getHomeInfo = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_HOME_INFO,
	});
	try {
		const { data } = await get('/tga/getHomeInfo');
		dispatch({
			type: C.FINISHED_FETCH_HOME_INFO,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_HOME_INFO,
			error,
		});
	}
};
