import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { format_price } from "../../../until";
const useStyles = makeStyles((theme) => ({
  description: {
    margin: "1rem 0"
  },
  price: {
    fontWeight: "bold",
    marginRight: "2rem"
  },
  priceOrigin: {
    margin: ".5rem",
    fontSize: "1.1rem",
    textDecoration: "line-through"
  },
  box_price: {
    background: theme.palette.grey[200],
    padding: "1rem",
    borderRadius: "7px"
  }
}));
const ProductDetailsInfo = ({ product = {} }) => {
  const classes = useStyles();
  return (
    <div>
      <Box padding={3}>
        <Typography component="h1" variant="h4">
          {product.name}
        </Typography>
        <Typography className={classes.description} variant="body2">
          {product.shortDescription}
        </Typography>

        <Box className={classes.box_price}>
          <Grid container alignItems="flex-end">
            <Typography variant="h5" component="span" className={classes.price}>
              {format_price(product.salePrice)}
            </Typography>
            {product.promotionPercent > 0 && (
              <Box>
                {" "}
                <Typography variant="body2" component="span" className={classes.priceOrigin}>
                  {format_price(product.originalPrice)}
                </Typography>
                <Typography variant="body2" component="span">
                  {`     -${product.promotionPercent}%`}
                </Typography>
              </Box>
            )}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

ProductDetailsInfo.propTypes = {
  product: PropTypes.object
};

export default ProductDetailsInfo;
