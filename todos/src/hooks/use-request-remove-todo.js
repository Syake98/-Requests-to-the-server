export const useRequestRemoveTodo = (refreshList) => {
	const onRemoveTodo = (event) => {
		const { id } = event.target.closest('div');
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			// .then((response) => response.json())
			.then(() => refreshList());
	};
	return { onRemoveTodo };
};
