import { ControlBoard, Loader, Todos } from '../../components';
import styles from '../common-page-design.module.css';

export const TodoMainPage = ({ ...props }) => (
	<div className={styles.container}>
		<ControlBoard {...props} />
		{props.isLoading ? (
			<Loader />
		) : (
			<div>
				{props.resultSearch.length === 0 ? (
					<small className={styles.emptyTodoList}>
						{props.todoList.length === 0
							? 'Список дел пуст'
							: 'Ничего не найдено'}
					</small>
				) : (
					<Todos
						todoList={props.valueSearch ? props.resultSearch : props.todoList}
						onRemoveTodo={props.onRemoveTodo}
						onEditTodo={props.onEditTodo}
					/>
				)}
			</div>
		)}
	</div>
);
