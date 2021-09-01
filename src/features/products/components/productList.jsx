import { Box, Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product";

const ProductList = ({ data = [] }) => {
  return (
    <div>
      <Box>
        <Grid container>
          {data.map((item, index) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={item} />{" "}
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

ProductList.propTypes = {};

export default ProductList;
