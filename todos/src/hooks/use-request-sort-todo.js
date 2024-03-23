import { useState } from 'react';

export const useRequestSortTodo = (todoList, setTodoList, refreshList) => {
	const [sort, setSort] = useState(false)
	const sortToggle = () => setSort(!sort)
	
	const sortList = () => {
		setTodoList(todoList.toSorted((a, b) => a.title.localeCompare(b.title)))
	}

	const onSortTodo = () => {
		sortToggle()

		if (!sort) {
			sortList()
		} else {
			refreshList()
		}
	}


	return { sort, onSortTodo };
};
