import axios from 'axios';

export const { API_URL } = process.env;

const baseApi = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getPaintings = async () => {
	try {
		const res = await baseApi.get('/paintings');
		return res.data;
	} catch (error) {
		console.error('Не удалось загрузить картины', error);
	}
};

export const getAuthors = async () => {
	try {
		const res = await baseApi.get('/authors');
		return res.data;
	} catch (error) {
		console.error('Не удалось загрузить картины', error);
	}
};

export const getLoactions = async () => {
	try {
		const res = await baseApi.get('/locations');
		return res.data;
	} catch (error) {
		console.error('Не удалось загрузить картины', error);
	}
};

