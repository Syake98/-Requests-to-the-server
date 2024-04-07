import { useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';

export const useSearch = (todoList, valueSearch) => {
	const [resultSearch, setResultSearch] = useState([]);

	const debounceValue = useDebounce(valueSearch, 1000);

	useEffect(() => {
		if (debounceValue?.trim().length > 0) {
			setResultSearch(
				todoList.filter((task) =>
					task.title.toLowerCase().includes(debounceValue.toLowerCase()),
				),
			);
		} else {
			setResultSearch(todoList);
		}
	}, [debounceValue, todoList]);

	return { resultSearch };
};
