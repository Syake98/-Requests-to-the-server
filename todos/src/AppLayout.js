import { Loader, ToDos } from './components/index';

export const AppLayout = ({ todoList, isLoading }) => {
	return (
		<>
			{isLoading ? <Loader /> : <ToDos todoList={todoList}/>}
		</>
	);
};
