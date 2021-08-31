import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../reducer/productSlice";
import productApi from "../../../api/productApi";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px"
  },
  right: {
    flex: "1"
  }
}));
const ListPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await productApi.getAll({ _limit: 10, _page: 1 });
      console.log(data);
    })();
  }, []);
  const dataProducts = useSelector((state) => state.product);
  const classes = useStyles();
  return (
    <div>
      List page product
      <Box>
        <Container>
          <Grid container>
            <Grid className={classes.left} item>
              The left item
            </Grid>
            <Grid className={classes.right} item>
              The right item
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

ListPage.propTypes = {};

export default ListPage;
