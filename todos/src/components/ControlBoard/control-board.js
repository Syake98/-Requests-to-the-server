import styles from './control-board.module.css';
import { Button } from '../../components';

export const ControlBoard = ({ onAddTodo, onSortTodo, isLoading, setValueSearch }) => {
	return (
		<>
			<h2 className={styles.title}>Todos</h2>
			<div className={styles.controlBoard}>
				<input
					className={styles.searchInput}
					type="text"
					placeholder="Поиск совпадающих задач"
					onChange={(e) => setValueSearch(e.target.value)}
				/>
				<Button onClick={onAddTodo} type={'add'} isLoading={isLoading} />
				<Button onClick={onSortTodo} type={'sort'} isLoading={isLoading} />
			</div>
		</>
	);
};
