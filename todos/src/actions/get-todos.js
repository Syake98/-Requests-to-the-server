import { getTodosRequest } from '../utils/get-todos-request';

export const getTodos = () => (dispatch) =>
	getTodosRequest().then((data) => dispatch({ type: 'GET_TODOS', payload: data }));
