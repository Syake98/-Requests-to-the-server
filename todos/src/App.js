import './App.css';
import styles from './app.module.css';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodos } from './actions';
import { ControlBoard, Loader, Todos } from './components';
import { selectorTodos, selectorSearch, selectorSort } from './selectors';

export const App = () => {
	const dispatch = useDispatch();
	let todos = useSelector(selectorTodos);
	const searchTodos = useSelector(selectorSearch);
	const sortedTodos = useSelector(selectorSort);

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		dispatch(getTodos(setIsLoading, searchTodos, sortedTodos));
	}, [searchTodos, sortedTodos]);

	return (
		<div className={styles.container}>
			<ControlBoard isLoading={isLoading} />
			{isLoading ? (
				<Loader />
			) : !todos.length ? (
				<div className={styles.emptyTodoList}>Список задач пуст</div>
			) : (
				<Todos todos={todos} isLoading={isLoading} />
			)}
		</div>
	);
};
