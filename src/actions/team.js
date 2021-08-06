import * as C from '../types';
import { get } from '../api';

export const getTeamList = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_TEAM_LIST,
	});
	try {
		const { data } = await get('/team/getList');
		dispatch({
			type: C.FINISHED_FETCH_TEAM_LIST,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_TEAM_LIST,
			error,
		});
	}
};

export const getTeamAll = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_TEAM_ALL,
	});
	try {
		const { data } = await get('/team/getAll');
		dispatch({
			type: C.FINISHED_FETCH_TEAM_ALL,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_TEAM_ALL,
			error,
		});
	}
};

export const getTeamMember = (memberId) => async (dispatch) => {
	dispatch({
		type: C.FETCH_TEAM_MEMBER,
	});
	try {
		const { data } = await get(`/team/member_${memberId}`);
		dispatch({
			type: C.FINISHED_FETCH_TEAM_MEMBER,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_TEAM_MEMBER,
			error,
		});
	}
};

export const getTeamCount = () => async (dispatch) => {
	dispatch({
		type: C.FETCH_TEAM_COUNT,
	});
	try {
		const { data } = await get('team/count');
		dispatch({
			type: C.FINISHED_FETCH_TEAM_COUNT,
			data,
		});
	} catch (error) {
		dispatch({
			type: C.ERROR_FETCH_TEAM_COUNT,
			error,
		});
	}
};
