import { useState } from 'react';

export const useRequestSortTodo = (todoList, setTodoList) => {
	const [sort, setSort] = useState(false)
	const [sortedTodos, setSortedTodos] = useState([])

	const sortToggle = () => setSort(!sort)

	const sortList = () => {
		setSortedTodos(todoList.toSorted((a, b) => a[1].title.localeCompare(b[1].title)))
	}

	const onSortTodo = () => {
		sortToggle()

		if (!sort) {
			sortList()
		} else {
			setSortedTodos(todoList)
		}
	}


	return { sort, onSortTodo, sortedTodos };
};
