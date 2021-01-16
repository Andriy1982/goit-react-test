import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './todos-types';
import actions from './todos-actions';

const items = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
  [actions.toggleCompleted]: (state, { payload }) => {
    return state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    );
  },
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
