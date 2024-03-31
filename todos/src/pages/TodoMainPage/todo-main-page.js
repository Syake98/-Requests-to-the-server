import { ControlBoard, Loader, Todos } from '../../components';
import styles from './todo-main-page.module.css';

export const TodoMainPage = ({
	onAddTodo,
	onRemoveTodo,
	onEditTodo,
	onSortTodo,
	valueSearch,
	setValueSearch,
	isLoading,
	resultSearch,
	todoList,
}) => (
	<div className={styles.container}>
		<ControlBoard
			onAddTodo={onAddTodo}
			onSortTodo={onSortTodo}
			valueSearch={valueSearch}
			setValueSearch={setValueSearch}
		/>
		{isLoading ? (
			<Loader />
		) : (
			<div>
				{resultSearch.length === 0 ? (
					<small className={styles.emptyTodoList}>
						{todoList.length === 0 ? 'Список дел пуст' : 'Ничего не найдено'}
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
