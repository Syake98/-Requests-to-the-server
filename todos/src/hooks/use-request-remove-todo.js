export const useRequestRemoveTodo = (refreshList) => {
	const onRemoveTodo = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then(() => refreshList());
	};
	return { onRemoveTodo };
};
