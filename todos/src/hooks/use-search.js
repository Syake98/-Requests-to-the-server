import { useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';

export const useSearch = (todoList, valueSearch) => {
	const [resultSearch, setResultSearch] = useState([]);

	const debounceValue = useDebounce(valueSearch, 1000);

	useEffect(() => {
		if (debounceValue?.trim()) {
			setResultSearch(() =>
				todoList.filter((todoList) => {
					return todoList[1].title
						.toLowerCase()
						.includes(debounceValue.toLowerCase());
				}),
			);
		} else {
			setResultSearch(todoList);
		}
	}, [debounceValue, todoList]);

	return { resultSearch, debounceValue };
};
