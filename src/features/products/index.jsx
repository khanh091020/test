import React from "react";
import PropTypes from "prop-types";
import ListPage from "./pages/listPage";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const ProductFeature = (props) => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path="/" component={ListPage} />
      </Switch>
    </div>
  );
};

ProductFeature.propTypes = {};

export default ProductFeature;
