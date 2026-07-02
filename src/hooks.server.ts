import type { Handle } from '@sveltejs/kit';
import { YEAR } from '$lib/config';

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%year%', String(YEAR))
	});
};
