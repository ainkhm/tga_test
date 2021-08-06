import * as C from '../types';
import { get } from '../api';

export const getProjectAll = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_PROJECT_ALL,
	});
	try {
		const { data } = await get('/project/getAll');
		dispatch({
			type: C.FINISHED_FETCH_PROJECT_ALL,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_PROJECT_ALL,
			error,
		});
	}
};

export const getProjectMember = (memberId) => async (dispatch) => {
	dispatch({
		type: C.FETCH_PROJECT_MEMBER,
	});
	try {
		const { data } = await get(`/project/getProjectsOf_${memberId}`);
		dispatch({
			type: C.FINISHED_FETCH_PROJECT_MEMBER,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_PROJECT_MEMBER,
			error,
		});
	}
};

export const getProject = (projectId) => async (dispatch) => {
	dispatch({
		type: C.FETCH_PROJECT,
	});
	try {
		const { data } = await get(`project/get_${projectId}`);
		dispatch({
			type: C.FINISHED_FETCH_PROJECT,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_PROJECT,
			error,
		});
	}
};
