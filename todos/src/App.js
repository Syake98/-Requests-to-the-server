import './App.css';
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
	const { onSortTodo } = useRequestSortTodo(refreshList);
	const { resultSearch } = useSearch(todoList, valueSearch);

	return (
		<div className={styles.container}>
			<ControlBoard
				onAddTodo={onAddTodo}
				onSortTodo={onSortTodo}
				isLoading={isLoading}
				setValueSearch={setValueSearch}
			/>
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
						<Todos
							todoList={valueSearch ? resultSearch : todoList}
							onRemoveTodo={onRemoveTodo}
							onEditTodo={onEditTodo}
						/>
					)}
				</div>
			)}
		</div>
	);
};
