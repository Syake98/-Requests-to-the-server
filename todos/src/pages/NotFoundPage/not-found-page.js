import styles from '../common-page-design.module.css';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
	<div className={styles.container}>
		<Link className={styles.todoTextLink} to="/">
			Вернуться к списку задач
		</Link>
		<br />
		Страница не найдена
	</div>
);
