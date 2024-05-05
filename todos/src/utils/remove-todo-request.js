export const removeTodoRequest = (id) => {
	return fetch(`http://localhost:3005/todos/${id}`, {
		method: 'DELETE',
	}).then((response) => {
		if (!response.ok) {
			throw new Error('При удалении задачи произошла ошибка');
		}
	});
};
