import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { DEFAULT_IMAGE, URL_API } from "../../../constants/index";
import { format_price } from "../../../until";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer"
  }
}));
const Product = ({ product = {} }) => {
  const classes = useStyles();
  const thumbnail = product.thumbnail ? URL_API + product.thumbnail?.url : DEFAULT_IMAGE;
  const history = useHistory();

  return (
    <div>
      <Box className={classes.root} padding={1} onClick={() => history.push(`/products/${product.id}`)}>
        <Box>
          <img src={`${thumbnail}`} alt={`${product.name}`} width="100%" />
        </Box>
        <Typography variant="body2">{product.name}</Typography>
        <Typography>
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {format_price(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
        </Typography>
      </Box>
    </div>
  );
};

export default Product;
