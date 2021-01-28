import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import Todo from '../Todo';
import todosActions from '../../redux/todos/todos-actions';
import { getVisibleTodos } from '../../redux/todos/todos-selector';
import './TodoList.scss';

console.log(todosActions);

export default function Todolist() {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();
  return (
    // { todos &&
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => dispatch(todosActions.toggleCompleted(id))}
            onDelete={() => dispatch(todosActions.deleteTodo(id))}
          />
        </li>
      ))}
    </ul>
  );
}
// }

// const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
//   <ul className="TodoList">
//     {todos.map(({ id, text, completed }) => (
//       <li
//         key={id}
//         className={classNames('TodoList__item', {
//           'TodoList__item--completed': completed,
//         })}
//       >
//         <Todo
//           text={text}
//           completed={completed}
//           onToggleCompleted={() => onToggleCompleted(id)}
//           onDelete={() => onDeleteTodo(id)}
//         />
//       </li>
//     ))}
//   </ul>
// );

// const mapDispatchToProps = dispatch => ({
//   onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
//   onToggleCompleted: id => dispatch(todosActions.toggleCompleted(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
