import React from 'react';
import './TodoFilter.scss';
import { useDispatch, useSelector } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import { getFilter } from '../../redux/todos/todos-selector';

const TodoFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={e => dispatch(todosActions.changeFilter(e.target.value))}
      />
    </div>
  );
};

// const mapStateToProps = state => ({
//   value: state.todos.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
// });

export default TodoFilter;
