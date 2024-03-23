import { useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';

export const useSearch = (todoList, valueSearch) => {
	const [resultSearch, setResultSearch] = useState([]);

	const debounceValue = useDebounce(valueSearch, 1000);

	useEffect(() => {
		if (debounceValue?.trim()) {
			fetch(`http://localhost:3005/todos?title=${debounceValue}`)
				.then((response) => response.json())
				.then((data) => {
					setResultSearch(data);
				});
		} else {
			setResultSearch(todoList);
		}
	}, [debounceValue, todoList]);

	return { resultSearch };
};
