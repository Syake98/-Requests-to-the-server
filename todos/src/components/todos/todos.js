import styles from './todos.module.css';

export const ToDos = ({ todoList }) => {
	return (
		<>
			<h2 className={styles.title}>ToDos</h2>
			<div>
				{Object.values(todoList)
					.filter((todo) => todo.userId === 1)
					.map((todo) => (
						<div key={todo.id} className={styles.todo}>
							{todo.title}
						</div>
					))}
			</div>
		</>
	);
};
