import './App.css';
import { AppLayout } from './AppLayout';
import { useState, useEffect } from 'react';

export const App = () => {
	const [todoList, setTodoList] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((responses) => responses.json())
			.then((parsedResponses) => {
				setTodoList(parsedResponses);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return <AppLayout todoList={todoList} isLoading={isLoading} />;
};
