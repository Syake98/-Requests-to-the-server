export const addTodoRequest = (newTodo) => {
	return fetch('http://localhost:3005/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: newTodo,
		}),
	}).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('При добавлении задачи произошла ошибка');
		}
	});
};
