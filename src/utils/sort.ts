export const sortByCreated = <T extends { created: string }>(f: T, n: T) =>
	new Date(n.created).getTime() - new Date(f.created).getTime();
