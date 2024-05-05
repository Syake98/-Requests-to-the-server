import styles from './todos.module.css';

import { useDispatch } from 'react-redux';

import { editTodo, removeTodo } from '../../actions';
import { Button } from '../../components';

export const Todos = ({ todos, isLoading }) => {
	const dispatch = useDispatch();

	const handleClickEditTodo = (todo) => {
		const newTodo = prompt('Отредактируйте задачу:', todo.title);

		if (newTodo?.trim() && todo.title !== newTodo) {
			dispatch(editTodo(todo.id, newTodo.trim()));
		}
	};

	const handleClickRemoveTodo = (todo) => {
		dispatch(removeTodo(todo.id));
	};

	return (
		<div className={styles.todoList}>
			{todos.map((todo) => {
				return (
					<div key={todo.id} className={styles.todo} id={todo.id}>
						<span className={styles.todoText}>{todo.title}</span>
						<Button
							onClick={() => handleClickEditTodo(todo)}
							type={'edit'}
							isDisabled={isLoading}
						/>
						<Button
							onClick={() => handleClickRemoveTodo(todo)}
							type={'remove'}
							isDisabled={isLoading}
						/>
					</div>
				);
			})}
		</div>
	);
};
