import { Box, Container, Grid, LinearProgress, makeStyles, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import productApi from "../../../api/productApi";
import FiltersProducts from "../components/filtersProducts";
import FiltersWiewLabel from "../components/filtersProducts/FiltersWiewLabel";
import Product_sort from "../components/filtersProducts/Product_sort";
import ProductList from "../components/productList";
import ProductListSkeleton from "../components/Selekon/productListSkeleton";
import "./listPage.scss";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
    paddingRight: "10px"
  },
  right: {
    flex: "1 1 0",
    paddingLeft: "10px"
  },
  panigations: {
    padding: "1rem 0"
  },
  paper: {
    height: "100%"
  },
  process: {
    position: "fixed",
    top: 0,
    width: "100%"
  }
}));
const ListPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const params = queryString.parse(location.search);
  const history = useHistory();

  // support back url
  const queryParams = useMemo(() => {
    const newParams = {
      ...params,
      _limit: Number.parseInt(params._limit) || 9,
      _page: Number.parseInt(params._page) || 1,
      _sort: params._sort || "salePrice:ASC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true"
    };
    return newParams;
  }, [location.search]);

  // const [filters, setFiltes] = useState({
  //   ...params,
  //   _limit: Number.parseInt(params._limit) || 9,
  //   _page: Number.parseInt(params._page) || 1,
  //   _sort: params._sort || "salePrice:ASC"
  // });

  const [panigations, setPanigations] = useState({
    limit: 12,
    page: 1,
    total: 12
  });

  // dong bo url
  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(queryParams)
    });
  }, [history, queryParams]);

  // get all product
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const { data, panigations } = await productApi.getAll(queryParams);
        setProductList(data);
        setPanigations(panigations);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const classes = useStyles();

  const handleOnchagePanigations = (e, page) => {
    // setFiltes((currentFilter) => ({
    //   ...currentFilter,
    //   _page: page
    // }));

    const newParams = { ...params, _page: page };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(newParams)
    });
  };

  const handleChangeSort = (sort) => {
    // setFiltes((currentFilter) => ({
    //   ...currentFilter,
    //   _sort: sort
    // }));

    const newParams = { ...params, _sort: sort };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(newParams)
    });
  };

  const handleOnchangeFilter = (newFilters) => {
    // setFiltes(newFilters);
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(newFilters)
    });
  };

  const handleFilterWiewLable = (newFilters) => {
    // setFiltes(newFilters);
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(newFilters)
    });
  };

  return (
    <div>
      {loading && (
        <div className={classes.process}>
          <LinearProgress color="secondary" />
        </div>
      )}
      <Box mb={2}>
        <Container>
          <Grid container>
            <Grid className={classes.left} item>
              <Paper elevation={0} className={classes.paper}>
                <FiltersProducts filters={queryParams} onChange={handleOnchangeFilter} />
              </Paper>
            </Grid>
            <Grid className={classes.right} item>
              <Paper elevation={0} className={classes.paper}>
                <Product_sort currentValue={queryParams._sort} handleChangeSort={handleChangeSort} />
                <FiltersWiewLabel filters={queryParams} onChange={handleFilterWiewLable} />
                {loading ? <ProductListSkeleton /> : <ProductList data={productList} />}{" "}
                <Box mb={2} mt={2}>
                  <Pagination
                    onChange={handleOnchagePanigations}
                    className={classes.panigations}
                    count={Math.ceil(panigations.total / panigations.limit)}
                    page={panigations.page}
                    variant="outlined"
                    color="primary"
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

ListPage.propTypes = {};

export default ListPage;
