import styles from './todos.module.css';
import { Button } from '../../components';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const Todos = () => {
	const {todoList,valueSearch, resultSearch,onEditTodo, onRemoveTodo } = useContext(AppContext);
	const finaltodoList = valueSearch ? resultSearch : todoList;
	return (
		<div className={styles.todoList}>
			{finaltodoList.map((todo) => (
				<div key={todo.id} className={styles.todo} id={todo.id}>
					<span className={styles.todoText}>{todo.title}</span>
					<Button onClick={() => onEditTodo(todo.id)} type={'edit'} />
					<Button onClick={() => onRemoveTodo(todo.id)} type={'remove'} />
				</div>
			))}
		</div>
	);
};
