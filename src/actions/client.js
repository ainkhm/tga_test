import * as C from '../types';
import { get } from '../api';

export const getClientAll = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_CLIENT_ALL,
	});
	try {
		const { data } = await get('/client/getAll');
		dispatch({
			type: C.FINISHED_FETCH_CLIENT_ALL,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_CLIENT_ALL,
			error,
		});
	}
};

export const getClientList = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_CLIENT_LIST,
	});
	try {
		const { data } = await get('/client/getList');
		dispatch({
			type: C.FINISHED_FETCH_CLIENT_LIST,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_CLIENT_LIST,
			error,
		});
	}
};

export const getClientMains = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_CLIENT_MAINS,
	});
	try {
		const { data } = await get('/client/getMains');
		dispatch({
			type: C.FINISHED_FETCH_CLIENT_MAINS,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_CLIENT_MAINS,
			error,
		});
	}
};

export const getClientProject = (projectId) => async (dispatch) => {
	dispatch({
		type: C.FETCH_CLIENT_PROJECT,
	});
	try {
		const { data } = await get(`/client/get_${projectId}`);
		dispatch({
			type: C.FINISHED_FETCH_CLIENT_PROJECT,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_CLIENT_PROJECT,
			error,
		});
	}
};
