import styles from './control-board.module.css';
import { Button } from '../index';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const ControlBoard = () => {
	const { valueSearch, setValueSearch, onAddTodo, onSortTodo } = useContext(AppContext);

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
				<Button onClick={onAddTodo} type={'add'} />
				<Button onClick={onSortTodo} type={'sort'} />
			</div>
		</>
	);
};
