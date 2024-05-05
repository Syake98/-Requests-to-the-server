import './App.css';
import styles from './app.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './actions';
import { selectorTodos } from './selectors';
import { ControlBoard, Loader, Todos } from './components';

export const App = () => {
	const dispatch = useDispatch();
	const todos = useSelector(selectorTodos)

	const [isLoading, setIsLoading] = useState(false);
	// const { resultSearch } = useSearch(todoList, valueSearch);

	useEffect(() => {
		setIsLoading(true);
		dispatch(getTodos())
			.catch((error) => {
				console.error(error);
			})
			.finally(() => setIsLoading(false));
	});

	return (
		<div className={styles.container}>
			<ControlBoard />
			{isLoading ? <Loader /> : <Todos />}
			{/* {isLoading ? (
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
			)} */}
		</div>
	);
};
