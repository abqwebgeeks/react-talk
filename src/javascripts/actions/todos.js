import {createAction} from 'redux-actions';

export const ADD_TODO = 'ADD_TODO';
export const addTodo = createAction(ADD_TODO);

export const SET_ALL_TODOS_COMPLETE = 'SET_ALL_TODOS_COMPLETE';
export const setAllTodosComplete = createAction(SET_ALL_TODOS_COMPLETE);

export const SET_TODO_COMPLETE = 'SET_TODO_COMPLETE';
export const setTodoComplete = createAction(SET_TODO_COMPLETE);
