import {handleActions} from 'redux-actions';
import uuid from 'uuid';

import {
  ADD_TODO,
  SET_ALL_TODOS_COMPLETE,
  SET_TODO_COMPLETE
} from '../actions/todos';

const initialState = [
  {
    uuid: uuid.v4(),
    completed: true,
    text: 'Add an input for adding todos'
  },
  {
    uuid: uuid.v4(),
    completed: true,
    text: 'Add a few dummy todos'
  },
  {
    uuid: uuid.v4(),
    completed: true,
    text: 'Implement ability to add todos'
  },
  {
    uuid: uuid.v4(),
    completed: true,
    text: 'Implement ability to complete todos'
  },
  {
    uuid: uuid.v4(),
    completed: true,
    text: 'Implement ability to complete all todos'
  },
  {
    uuid: uuid.v4(),
    completed: false,
    text: 'Refactor state out of container to Redux'
  }
];

const actions = {
  [ADD_TODO]: (state, action) => {
    return [...state, {
      uuid: uuid.v4(),
      complete: false,
      text: action.payload
    }]
  },

  [SET_ALL_TODOS_COMPLETE]: (state, action) => {
    const completed = action.payload;
    return state.map(
      todo => Object.assign({}, todo, {completed}));
  },

  [SET_TODO_COMPLETE]: (state, action) => {
    const {completed, uuid} = action.payload;
    const index = state.findIndex(todo => todo.uuid === uuid);
    if (index !== -1) {
      // Return a new object with `completed` flipped
      const toggledTodo = Object.assign({}, state[index], {completed});

      // Return a new array, replacing the selected index
      return [
        ...state.slice(0, index),
        toggledTodo,
        ...state.slice(index + 1)
      ];
    }

    return state;
  }
}

export default handleActions(actions, initialState);
