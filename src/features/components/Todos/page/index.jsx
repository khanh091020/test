import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../../../components/notFound';
import TodoDetails from '../todoDetails';
import TodoList from '../todoList';

const Todos = (props) => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={TodoList} exact />
        <Route path={`${match.path}/:id`} component={TodoDetails} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

Todos.propTypes = {};

export default Todos;
