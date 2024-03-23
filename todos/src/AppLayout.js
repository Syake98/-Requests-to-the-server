import {Loader, Todos} from './components'

export const AppLayout = ({ todoList, isLoading, }) => {
	return (
		<>
			{isLoading ? <Loader /> : <Todos todoList={todoList} />}
		</>
	);
};
