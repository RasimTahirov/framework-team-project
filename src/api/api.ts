import {
	TAuthor,
	TLocations,
	TPainting,
} from '@/components/Content/types/types';
import axios from 'axios';

export const { API_URL } = process.env;

const baseApi = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getPaintings = async (): Promise<TPainting[]> => {
	try {
		const res = await baseApi.get('/paintings');
		return res.data;
	} catch (error) {
		console.error('Не удалось загрузить картины', error);
		return [];
	}
};

export const getAuthors = async (): Promise<TAuthor[]> => {
	try {
		const res = await baseApi.get('/authors');
		return res.data;
	} catch (error) {
		console.error('Не удалось загрузить картины', error);
		return [];
	}
};

export const getLocations = async (): Promise<TLocations[]> => {
	try {
		const res = await baseApi.get('/locations');
		return res.data;
	} catch (error) {
		console.error('Не удалось загрузить картины', error);
		return [];
	}
};
