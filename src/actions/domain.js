import * as C from '../types';
import { get } from '../api';

export const getDomainList = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_DOMAIN_LIST,
	});
	try {
		const { data } = await get('/domain/getList');
		dispatch({
			type: C.FINISHED_FETCH_DOMAIN_LIST,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_DOMAIN_LIST,
			error,
		});
	}
};

export const getDomainAll = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_DOMAIN_ALL,
	});
	try {
		const { data } = await get('/domain/getAll');
		dispatch({
			type: C.FINISHED_FETCH_DOMAIN_ALL,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_DOMAIN_ALL,
			error,
		});
	}
};
