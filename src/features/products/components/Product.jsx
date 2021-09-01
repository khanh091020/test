import { Box, Grid, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { DEFAULT_IMAGE, URL_API } from "../../../constants/index";

const Product = ({ product = {} }) => {
  const thumbnail = product.thumbnail ? URL_API + product.thumbnail?.url : DEFAULT_IMAGE;
  return (
    <div>
      <Box padding={1}>
        <Box>
          <img src={`${thumbnail}`} alt={`${product.name}`} width="100%" />
        </Box>
        <Typography variant="body2">{product.name}</Typography>
        <Typography>
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {new Intl.NumberFormat("vn-VN", { style: "currency", currency: "VND" }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
        </Typography>
      </Box>
    </div>
  );
};

export default Product;
