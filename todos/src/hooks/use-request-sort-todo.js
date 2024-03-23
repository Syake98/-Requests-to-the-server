import { useState } from 'react';

export const useRequestSortTodo = (todoList, setTodoList, refreshList) => {
	// const [sortedTodos, setSortedTodos] = useState(false);

	// const sortToggle = () => setSortedTodos(!sortedTodos);
	// const sortedList = []

	// const onSortTodo = () => {

	// 	if(!sortedTodos) {
	// 		console.log(todoList)
	// 		sortedList = [...todoList].toSorted((a, b) => a.title.localeCompare(b.title))
	// 	} else {
	// 		sortedList = todoList
	// 	}
	// 	sortToggle()
	// 	refreshList()
	// 	setTodoList(sortedList)
	// }

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
