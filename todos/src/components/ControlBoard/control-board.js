import styles from './control-board.module.css';
import { Button } from '../../components';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorSort, selectorSearch, selectorTodos } from '../../selectors';

import { addTodo } from '../../actions';

export const ControlBoard = () => {
	const dispatch = useDispatch();
	const sortedTodos = useSelector(selectorSort)
	const searchedTodos = useSelector(selectorSearch)
	const todos = useSelector(searchedTodos)

	const [isButtonDisable, setIsButtonDisable] = useState(false);

	const handleClickAddTodo = () => {
		const newTodo = prompt('Введите задачу:');

		if (newTodo?.trim()) {
			setIsButtonDisable(true);
			dispatch(addTodo(newTodo.trim()))
				.catch((error) => console.error(error))
				.finally(() => setIsButtonDisable(false));
		}
	};

	const handleClickSortTodos = () => {
		dispatch({type: 'SORT_TODOS'})
	}

	const handleClickSearchTodos = () => {
		dispatch({type: 'SEARCH_TODOS
'})
	}

	return (
		<>
			<h2 className={styles.title}>Todos</h2>
			<div className={styles.controlBoard}>
				<input
					className={styles.searchInput}
					type="text"
					placeholder="Поиск совпадающих задач"
					// onChange={(e) => setValueSearch(e.target.value)}
				/>
				<Button
					onClick={handleClickAddTodo}
					type={'add'}
					isButtonDisable={isButtonDisable}
				/>
				<Button
					onClick={handleClickSortTodos}
					type={'sort'}
					disable={isButtonDisable}
				/>
			</div>
		</>
	);
};
