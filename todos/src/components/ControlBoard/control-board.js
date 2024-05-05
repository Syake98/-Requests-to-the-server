import styles from './control-board.module.css';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../actions';
import { Button } from '../../components';
import { useDebounce } from '../../utils';

export const ControlBoard = ({ isLoading }) => {
	const dispatch = useDispatch();
	const [filter, setFilter] = useState('');
	const debFilter = useDebounce(filter, 500);

	useEffect(() => {
		dispatch({ type: 'SEARCH_TODOS', payload: debFilter });
	}, [debFilter]);

	const handleClickAddTodo = () => {
		const newTodo = prompt('Введите задачу:');
		if (newTodo?.trim()) {
			dispatch(addTodo(newTodo.trim()));
		}
	};

	const handleClickSortTodos = () => {
		dispatch({ type: 'SORT_TODOS' });
	};

	const handleChange = ({ target }) => {
		setFilter(target.value);
	};

	return (
		<>
			<h2 className={styles.title}>Todos</h2>
			<div className={styles.controlBoard}>
				<input
					className={styles.searchInput}
					type="text"
					placeholder="Поиск совпадающих задач"
					onChange={handleChange}
				/>
				<Button onClick={handleClickAddTodo} type={'add'} isDisabled={isLoading} />
				<Button onClick={handleClickSortTodos} type={'sort'} isDisabled={isLoading} />
			</div>
		</>
	);
};
