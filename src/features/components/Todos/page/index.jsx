import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TodoList from '../todoList';
import TodoDetails from '../todoDetails';
import NotFound from '../../../../components/notFound';

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
