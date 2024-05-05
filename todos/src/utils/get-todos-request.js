export const getTodosRequest = (setIsLoading) => {
	setIsLoading(true);

	return fetch(`http://localhost:3005/todos`)
		.then((response) => response.json())
		.catch((error) => {
			throw new Error(error.message);
		})
		.finally(() => setIsLoading(false));
};
