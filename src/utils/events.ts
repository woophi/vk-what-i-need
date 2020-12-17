import React from 'react';

export const stopEvents = <T>(e: React.MouseEvent<T, MouseEvent>) => {
	e.preventDefault();
	e.stopPropagation();
};
