export const useRequestAddTodo = (refreshList) => {
	const onAddTodo = () => {
		const newTodo = prompt('Введите новую задачу:');

		if (newTodo && newTodo.trim() !== '') {
			fetch('http://localhost:3005/todos', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: newTodo,
				}),
			}).then(() => refreshList());
		}
	};
	return { onAddTodo };
};
