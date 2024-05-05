import { useState } from 'react';

export const useRequestSortTodo = (todoList, setTodoList, refreshList) => {
	const [sort, setSort] = useState(false)

	const sortToggle = () => setSort(!sort)

	const onSortTodo = () => {
		sortToggle()

		if (!sort) {
			sortList()
		} else {
			refreshList()
		}
	}

	const sortList = () => {
		setTodoList(todoList.toSorted((a, b) => a.title.localeCompare(b.title)))
	}

	return { sort, onSortTodo };
};
