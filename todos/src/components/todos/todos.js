import styles from './todos.module.css';
import { Button } from '../../components';

export const Todos = ({ todoList, onEditTodo, onRemoveTodo, isLoading }) => {
	return (
		<>
			<div className={styles.todoList}>
				<div>
					{todoList.map(([id, todo]) => (
						<div key={id} className={styles.todo} id={id}>
							<span className={styles.todoText}>{todo.title}</span>
							<Button
								onClick={onEditTodo}
								type={'edit'}
								isLoading={isLoading}
							/>
							<Button
								onClick={onRemoveTodo}
								type={'remove'}
								isLoading={isLoading}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
