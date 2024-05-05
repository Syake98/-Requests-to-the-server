export const removeTodoRequest = (id) => {
	return fetch(`http://localhost:3005/todos/${id}`, {
		method: 'DELETE',
	}).catch((error) => {
		throw new Error(error.message);
	});
};
