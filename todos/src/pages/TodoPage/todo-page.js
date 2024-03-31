import styles from './todo-page.module.css';
import { Button } from '../../components';
import { useParams, useNavigate } from 'react-router-dom';

export const TodoPage = ({ todoList, onEditTodo, onRemoveTodo }) => {
	const params = useParams();
	const navigate = useNavigate();

	const todoInfo = todoList.find((el) => el.id === params.id);

	if (!todoInfo) {
		navigate('/deleted-page');
		return;
	}

	return (
		<div key={todoInfo.id} className={styles.todoPage} id={todoInfo.id}>
			<div className={styles.todoButtons}>
				<Button onClick={() => navigate(-1)} type={'mainPage'} />
				<Button onClick={() => onEditTodo(params.id)} type={'edit'} />
				<Button onClick={() => onRemoveTodo(params.id)} type={'remove'} />
			</div>
			<div className={styles.todoText}>
				<span>ID данной задачи: {todoInfo.id}</span>
				<span>Задача: {todoInfo.title}</span>
			</div>
		</div>
	);
};
