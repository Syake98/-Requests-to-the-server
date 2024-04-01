import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	useRequestAddTodo,
	useRequestRemoveTodo,
	useRequestEditTodo,
	useRequestSortTodo,
	useSearch,
} from './hooks';
import { DeletedPage, NotFoundPage, TodoMainPage, TodoPage } from './pages';

export const App = () => {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [valueSearch, setValueSearch] = useState('');

	const refreshList = () => setRefreshTodos(!refreshTodos);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3005/todos')
			.then((responses) => responses.json())
			.then((parsedResponses) => {
				setTodoList(parsedResponses);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodos]);

	const { onAddTodo } = useRequestAddTodo(refreshList);
	const { onRemoveTodo } = useRequestRemoveTodo(refreshList);
	const { onEditTodo } = useRequestEditTodo(refreshList);
	const { onSortTodo } = useRequestSortTodo(todoList, setTodoList, refreshList);
	const { resultSearch } = useSearch(todoList, valueSearch);

	const props = {
		todoList,
		setTodoList,
		isLoading,
		setIsLoading,
		refreshTodos,
		setRefreshTodos,
		valueSearch,
		setValueSearch,
		onAddTodo,
		onEditTodo,
		onRemoveTodo,
		onSortTodo,
		resultSearch,
	};

	return (
		<Routes>
			<Route path="/" element={<TodoMainPage {...props} />} />
			<Route path="/task/:id" element={<TodoPage {...props} />} />
			<Route path="/deleted-page" element={<DeletedPage />} />
			<Route path="/*" element={<NotFoundPage />} />
		</Routes>
	);
};
