import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestEditTodo = () => {
	const onEditTodo = (event) => {
		const { id } = event.target.closest('div');
		const { textContent } = event.target.closest('div').children[0];
		const todoDbRef = ref(db, `todos/${id}`);

		const editTodo = prompt('Отредактируйте задание:', textContent);

		if (editTodo && editTodo?.trim()) {
			set(todoDbRef, {
				title: editTodo,
			});
		}
	};
	return { onEditTodo };
};
