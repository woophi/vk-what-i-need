export const buildQueryString = (items: { [key: string]: unknown }[]) => {
	const joined = items
		.map(it => {
			const key = Object.keys(it)[0];
			return `${key}=${
				typeof it[key] === 'object' ? JSON.stringify(it[key]) : encodeURI(it[key] as string)
			}`;
		})
		.join('&');
	return joined.length > 0 ? '?' + joined : '';
};
