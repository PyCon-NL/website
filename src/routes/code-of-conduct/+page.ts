import { redirect } from '@sveltejs/kit';
import { CODE_OF_CONDUCT_URL } from '$lib/config';

export const load = () => {
	redirect(308, CODE_OF_CONDUCT_URL);
};
