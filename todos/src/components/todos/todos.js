import styles from './todos.module.css';
import { Button } from '..';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editTodo, removeTodo } from '../../actions';
import { selectorTodos } from '../../selectors';

export const Todos = () => {
	const dispatch = useDispatch();
	const todos = useSelector(selectorTodos);

	const [isTodoButtonDisable, setIsTodoButtonDisable] = useState(false);

	const handleClickEditTodo = (todo) => {
		const newTodo = prompt('Отредактируйте задачу:', todo.title);

		if (newTodo?.trim() && todo.title !== newTodo) {
			setIsTodoButtonDisable(true);
			dispatch(editTodo(todo.id, newTodo.trim()))
				.catch((error) => console.error(error))
				.finally(() => setIsTodoButtonDisable(false));
		}
	};

	const handleClickRemoveTodo = (todo) => {
		setIsTodoButtonDisable(true);
		dispatch(removeTodo(todo.id))
			.catch((error) => console.error(error))
			.finally(() => setIsTodoButtonDisable(false));
	};

	return (
		<>
			<div className={styles.todoList}>
				<div>
					{todos.map((todo) => (
						<div key={todo.id} className={styles.todo} id={todo.id}>
							<span className={styles.todoText}>{todo.title}</span>
							<Button
								onClick={() => handleClickEditTodo(todo)}
								type={'edit'}
								isButtonDisable={isTodoButtonDisable}
							/>
							<Button
								onClick={() => handleClickRemoveTodo(todo)}
								type={'remove'}
								isButtonDisable={isTodoButtonDisable}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
