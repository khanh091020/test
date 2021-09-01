import { Box, Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../../api/productApi";
import ProductList from "../components/productList";
import ProductListSkeleton from "../components/productListSkeleton";
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
  }
}));
const ListPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [filters, setFiltes] = useState({
    _limit: 12,
    _page: 1
  });
  const [panigations, setPanigations] = useState({
    limit: 12,
    page: 1,
    total: 12
  });
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const { data, panigations } = await productApi.getAll(filters);
        console.log({ data, panigations });
        setProductList(data);
        setPanigations(panigations);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    })();
  }, [filters]);
  const dataProducts = useSelector((state) => state.product);
  const classes = useStyles();
  const handleOnchagePanigations = (e, page) => {
    setFiltes((currentFilter) => ({
      ...currentFilter,
      _page: page
    }));
  };
  return (
    <div>
      List page product
      <Box mb={2}>
        <Container>
          <Grid container>
            <Grid className={classes.left} item>
              <Paper elevation={0}>Left</Paper>
            </Grid>
            <Grid className={classes.right} item>
              <Paper elevation={0} className={classes.paper}>
                {loading ? <ProductListSkeleton /> : <ProductList data={productList} />}{" "}
                <Box mb={2} mt={2}>
                  <Pagination
                    onChange={handleOnchagePanigations}
                    classNames={classes.panigations}
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
