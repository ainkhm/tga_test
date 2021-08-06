import axios from 'axios';

export const baseURL = 'https://tga-server.herokuapp.com';

const tgaAPI = axios.create({
	baseURL,
});

export async function get(url) {
	return tgaAPI.get(url);
}
