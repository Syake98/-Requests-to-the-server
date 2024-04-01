export const useRequestEditTodo = (refreshList) => {
	const onEditTodo = (id) => {
		const editTodo = prompt('Отредактируйте задание:');

		if (editTodo && editTodo.trim() !== '') {
			fetch(`http://localhost:3005/todos/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: editTodo,
				}),
			}).then(() => refreshList());
		}
	};
	return { onEditTodo };
};
