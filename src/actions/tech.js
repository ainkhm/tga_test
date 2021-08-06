import * as C from '../types';
import { get } from '../api';

export const getTechList = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_TECH_LIST,
	});
	try {
		const { data } = await get('/technology/getList');
		dispatch({
			type: C.FINISHED_FETCH_TECH_LIST,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_TECH_LIST,
			error,
		});
	}
};

export const getTechMains = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_TECH_MAINS,
	});
	try {
		const { data } = await get('/technology/getMains');
		dispatch({
			type: C.FINISHED_FETCH_TECH_MAINS,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_TECH_MAINS,
			error,
		});
	}
};
