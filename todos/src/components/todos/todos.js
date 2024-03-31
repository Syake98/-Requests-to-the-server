import styles from './todos.module.css';
import { Link } from 'react-router-dom';

export const Todos = ({ todoList }) => {
	return (
		<>
			<div className={styles.todoList}>
				<div>
					{todoList.map((todo) => (
						<div key={todo.id} className={styles.todo} id={todo.id}>
							<Link to={`/task/${todo.id}`} className={styles.todoText}>
								{todo.title}
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
