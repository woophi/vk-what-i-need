export const pick = <T>(names: Partial<keyof T>[], obj: T): Pick<T, keyof T> => {
	const result = {} as Pick<T, keyof T>;
	let idx = 0;
	while (idx < names.length) {
		if (names[idx] in obj) {
			result[names[idx]] = obj[names[idx]];
		}
		idx += 1;
	}
	return result;
};
