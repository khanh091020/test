import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListPage from "./pages/listPage";
import ProductDetails from "./pages/productDetails";

const ProductFeature = (props) => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${path}/:id`} component={ProductDetails} exact />
        <Route path={`${path}/`} component={ListPage} />
      </Switch>
    </div>
  );
};

ProductFeature.propTypes = {};

export default ProductFeature;
