export const editTodoRequest = (id, editTodo) => {
	return fetch(`http://localhost:3005/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: editTodo,
		}),
	})
		.then((response) => response.json())
		.catch((error) => {
			throw new Error(error.message);
		});
};
