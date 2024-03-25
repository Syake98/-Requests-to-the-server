import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestRemoveTodo = () => {
	const onRemoveTodo = (event) => {
		const { id } = event.target.closest('div');
		const todoDbRef = ref(db, `todos/${id}`);

		remove(todoDbRef);
	};
	return { onRemoveTodo };
};
