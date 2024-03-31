import styles from './app.module.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { ControlBoard, Loader, Todos, TodoPage } from './components';
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
	const { onSortTodo } = useRequestSortTodo(todoList, setTodoList, refreshList);
	const { resultSearch } = useSearch(todoList, valueSearch);

	const TodoMainPage = () => (
		<div className={styles.container}>
			<ControlBoard
				onAddTodo={onAddTodo}
				onSortTodo={onSortTodo}
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

	const NotFoundPage = () => (
		<div className={styles.container}>
			<Link className={styles.mainPageLink} to="/">
				Вернуться к списку задач
			</Link>
			<br />
			Страница не найдена
		</div>
	);

	const DeletedPage = () => (
		<div className={styles.container}>
			<Link className={styles.mainPageLink} to="/">
				Вернуться к списку задач
			</Link>
			<br />
			Задача удалена
		</div>
	);

	return (
		<div>
			<Routes>
				<Route path="/" element={<TodoMainPage />} />
				<Route
					path="/task/:id"
					element={
						<TodoPage
							todoList={todoList}
							onEditTodo={onEditTodo}
							onRemoveTodo={onRemoveTodo}
						/>
					}
				/>
				<Route path="/deleted-page" element={<DeletedPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			;
		</div>
	);
};

// const messageTodoSearch = () => {
// 	<small className={styles.emptyTodoList}>
// 		{todoList.length === 0 ? 'Список дел пуст' : 'Ничего не найдено'}
// 	</small>;
// };

// const ExtendedLink = ({ to, children }) => (
// 	<NavLink to={to}>
// 		{({ isActive }) =>
// 			isActive ? (
// 				<>
// 					<span>{children}</span>
// 					<span className={styles.activeLinkIcon} />
// 				</>
// 			) : (
// 				children
// 			)
// 		}
// 	</NavLink>
// );
