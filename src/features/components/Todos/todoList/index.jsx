import React, { useState, Fragment, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todoItem';
import './index.scss';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../todoFrom';
import { v4 as uuidv4 } from 'uuid';

TodoList.propTypes = {};

function TodoList(props) {
  let todoListInit = [
    {
      id: 1,
      title: 'viec 1',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'viec 2',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'viec 3',
      isCompleted: false,
    },
  ];

  const location = useLocation();
  const match = useRouteMatch();
  const history = useHistory();
  const [todoList, setTodoList] = useState(todoListInit);
  const [filerterTodo, setFilerterTodo] = useState(() => {
    let params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    setFilerterTodo(queryString.parse(location.search).status || 'all');
  }, [location.search]);

  const handleOnlick = (id) => {
    let newTodoList = todoList.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodoList(newTodoList);
  };
  const showAllTodos = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({
        status: 'all',
      }),
    });
  };
  const showCompletedTodos = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({
        status: 'true',
      }),
    });
  };
  const showNotCompletedTodos = () => {
    history.push({
      pathname: match.path,
      search: queryString.stringify({
        status: 'false',
      }),
    });
  };
  let filterTodos = useMemo(() => {
    console.log(filerterTodo);
    return todoList.filter((todo) => filerterTodo === 'all' || todo.isCompleted.toString() === filerterTodo.toString());
  }, [todoList, filerterTodo]);
  const handleSubmitForm = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };
    const newArr = [...todoList];
    newArr.push(newTodo);
    setTodoList(newArr);
  };

  return (
    <Fragment>
      <TodoForm handleSubmitForm={handleSubmitForm} />
      <ul>
        {filterTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleOnlick={handleOnlick} />
        ))}
      </ul>
      <button onClick={showAllTodos}>Show all</button>
      <button onClick={showCompletedTodos}>Show completed</button>
      <button onClick={showNotCompletedTodos}>Show not completed</button>
    </Fragment>
  );
}

export default TodoList;
