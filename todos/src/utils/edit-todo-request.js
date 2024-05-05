export const editTodoRequest = (id, editTodo) => {
	return fetch(`http://localhost:3005/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: editTodo,
		}),
	}).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('При редактировании задачи произошла ошибка');
		}
	});
};
