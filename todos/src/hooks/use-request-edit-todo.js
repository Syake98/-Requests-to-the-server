export const useRequestEditTodo = (refreshList) => {
	const onEditTodo = (event) => {
		const { id } = event.target.closest('div');
		const { textContent } = event.target.closest('div').children[0];

		const editTodo = prompt('Отредактируйте задание:', textContent);

		if (editTodo && editTodo.trim() !== '') {
			fetch(`http://localhost:3005/todos/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: editTodo,
				}),
			})
				// .then((response) => response.json())
				.then(() => refreshList());
		}
	};
	return { onEditTodo };
};
