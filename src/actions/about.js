import * as C from '../types';
import { get } from '../api';

export const getAboutInfo = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_ABOUT_INFO,
	});
	try {
		const { data } = await get('/tga/getAboutInfo');
		dispatch({
			type: C.FINISHED_FETCH_ABOUT_INFO,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_ABOUT_INFO,
			error,
		});
	}
};
