export const getTodosRequest = () => {
	return fetch(`http://localhost:3005/todos`).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('При получении задач произошла ошибка');
		}
	});
};
