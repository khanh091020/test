import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const TodoItem = ({ todo, handleOnlick }) => {
  return (
    <li key={todo.id} onClick={() => handleOnlick(todo.id)} className={todo.isCompleted ? 'complete' : ''}>
      {todo.title}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleOnlick: PropTypes.func.isRequired,
};

export default TodoItem;
