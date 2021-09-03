import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

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
  }
}));
const ProductDetailsSelekon = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Container>
          <Grid container>
            <Grid item className={classes.left}>
              <Skeleton animation="wave" variant="rect" width="100%" height={400} />
            </Grid>
            <Grid item className={classes.right}>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

ProductDetailsSelekon.propTypes = {};

export default ProductDetailsSelekon;
