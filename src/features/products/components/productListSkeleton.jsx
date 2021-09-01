import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const ProductListSkeleton = (props) => {
  return (
    <div>
      <Box minHeight={275}>
        <Grid container>
          {Array.from(new Array(props.length)).map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={225} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

ProductListSkeleton.propTypes = {
  length: PropTypes.number
};
ProductListSkeleton.defaultProps = {
  length: 10
};

export default ProductListSkeleton;
