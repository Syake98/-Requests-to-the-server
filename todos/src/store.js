import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer, listStateReducer } from './reducers';

const reducer = combineReducers({
	todos: todosReducer,
	listState: listStateReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
