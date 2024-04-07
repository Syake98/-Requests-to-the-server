import styles from './app.module.css';
import { useState, useEffect } from 'react';
import { ControlBoard, Loader, Todos } from './components';
import {
	useRequestAddTodo,
	useRequestRemoveTodo,
	useRequestEditTodo,
	useRequestSortTodo,
	useSearch,
} from './hooks';
import { AppContext } from './context';

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
		<AppContext.Provider value={props}>
			<div className={styles.container}>
				<ControlBoard />
				{isLoading ? (
					<Loader />
				) : (
					<div>
						{resultSearch.length === 0 ? (
							<small className={styles.emptyTodoList}>
								{todoList.length === 0
									? 'Список дел пуст'
									: 'Ничего не найдено'}
							</small>
						) : (
							<Todos />
						)}
					</div>
				)}
			</div>
		</AppContext.Provider>
	);
};
