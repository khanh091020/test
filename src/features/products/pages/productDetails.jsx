import React from "react";
import PropTypes from "prop-types";
import { Box, Container, LinearProgress, makeStyles, Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import ProductThumbnail from "../components/ProductThumbnail";
import { useRouteMatch } from "react-router-dom";
import { useProductDetails } from "../productHooks/useProductDetails";
import ProductDetailsInfo from "../components/productDetailsInfo";
import ProductDetailsSelekon from "../components/Selekon/productDetailsSelekon";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: "400px",
    padding: "1rem",
    "& .MuiPaper-root": {
      border: "1px solid blue"
    }
  },
  right: {
    flex: "1",
    padding: "1rem",
    "& .MuiPaper-root": {
      // paddingLeft: "1rem"
    }
  },

  paper: {
    height: "100%",
    background: "#fff"
  },
  process: {
    position: "fixed",
    top: 0,
    width: "100%"
  }
}));

const ProductDetails = (props) => {
  const { params } = useRouteMatch();
  const { product, loading } = useProductDetails(params.id);
  // console.log(product);
  // if (loading) console.log("loading");
  const classes = useStyles();
  return (
    <div>
      {loading && (
        <div className={classes.process}>
          <LinearProgress color="secondary" />
        </div>
      )}
      {loading ? (
        <ProductDetailsSelekon />
      ) : (
        <Box className={classes.root}>
          <Container>
            <Grid container>
              <Grid item className={classes.left}>
                <Paper className={classes.paper}>
                  {loading && <Box>Loading</Box>}
                  {!loading && <ProductThumbnail product={product} />}
                </Paper>
              </Grid>
              <Grid item className={classes.right}>
                <Paper className={classes.paper}>
                  <ProductDetailsInfo product={product} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </div>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
