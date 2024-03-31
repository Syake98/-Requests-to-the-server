import styles from './not-found-page.module.css';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
	<div className={styles.container}>
		<Link to="/">Вернуться к списку задач</Link>
		<br />
		Страница не найдена
	</div>
);
