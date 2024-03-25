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
import { ref, onValue } from 'firebase/database';
import { db } from './firebase';

export const App = () => {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [valueSearch, setValueSearch] = useState('');

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val() || [];

			setTodoList(Object.entries(loadedTodos));
			setIsLoading(false);
		});
	}, []);

	const { onAddTodo } = useRequestAddTodo();
	const { onRemoveTodo } = useRequestRemoveTodo();
	const { onEditTodo } = useRequestEditTodo();
	const { sort, onSortTodo, sortedTodos } = useRequestSortTodo(todoList);
	const { resultSearch, debounceValue } = useSearch(todoList, valueSearch);

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
					{(debounceValue && resultSearch.length === 0) ||
					todoList.length === 0 ? (
						<small className={styles.emptyTodoList}>
							{todoList.length === 0
								? 'Список дел пуст'
								: 'Ничего не найдено'}
						</small>
					) : (
						<Todos
							todoList={
								valueSearch ? resultSearch : sort ? sortedTodos : todoList
							}
							onRemoveTodo={onRemoveTodo}
							onEditTodo={onEditTodo}
						/>
					)}
				</div>
			)}
		</div>
	);
};
