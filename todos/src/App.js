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

	return (
		<Routes>
			<Route
				path="/"
				element={
					<TodoMainPage
						onAddTodo={onAddTodo}
						onRemoveTodo={onRemoveTodo}
						onEditTodo={onEditTodo}
						onSortTodo={onSortTodo}
						valueSearch={valueSearch}
						setValueSearch={setValueSearch}
						isLoading={isLoading}
						resultSearch={resultSearch}
						todoList={todoList}
					/>
				}
			/>
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
			<Route path="/not-found-page" element={<NotFoundPage />} />
		</Routes>
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
