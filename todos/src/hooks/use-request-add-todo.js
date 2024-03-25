import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddTodo = () => {
	const onAddTodo = () => {
		const newTodo = prompt('Введите новую задачу:');

		const todosDbRef = ref(db, 'todos');

		if (newTodo && newTodo?.trim()) {
			push(todosDbRef, {
				title: newTodo,
			});
		}
	};
	return { onAddTodo };
};
