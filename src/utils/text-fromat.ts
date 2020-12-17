export const safeTrim = (value: string) => {
	if (typeof value === 'string') {
		return value.trim();
	}
	return value;
};

export const hexToRgba = (hex: string, opacity = 1) => {
	const bigint = parseInt(hex.replace(/[^0-9A-F]/gi, ''), 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	return `rgba(${r},${g},${b},${opacity})`;
};

const onlyRuLetters = /[^(а-яА-я|ёЁ|\-) ]/g;
type Options = {
	// default /[^(а-яА-я|ёЁ|\-) ]/g;
	onlyLetters?: RegExp;
	// default 35
	maxLength?: number;
};
export const shapeInputValue = (v: string, options: Options) => {
	const { maxLength = 35, onlyLetters = onlyRuLetters } = options;
	v = v.replace(onlyLetters, '');
	if (v.length > maxLength) {
		return v.slice(0, maxLength - 1);
	}
	return v;
};
