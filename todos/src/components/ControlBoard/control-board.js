import styles from './control-board.module.css';
import { Button } from '../../components';

export const ControlBoard = ({ onAddTodo, onSortTodo, valueSearch, setValueSearch }) => {
	return (
		<>
			<h2 className={styles.title}>Список задач</h2>
			<div className={styles.controlBoard}>
				<input
					className={styles.searchInput}
					type="text"
					placeholder="Поиск совпадающих задач"
					value={valueSearch}
					onChange={(e) => setValueSearch(e.target.value)}
				/>
				<Button onClick={onAddTodo} type={'add'}/>
				<Button onClick={onSortTodo} type={'sort'}/>
			</div>
		</>
	);
};
