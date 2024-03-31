import styles from './deleted-page.module.css';
import { Link } from 'react-router-dom';

export const DeletedPage = () => (
	<div className={styles.container}>
		<Link to="/">Вернуться к списку задач</Link>
		<br />
		Задача удалена
	</div>
);
