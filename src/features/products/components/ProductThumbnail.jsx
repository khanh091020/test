import React from "react";
import PropTypes from "prop-types";
import { DEFAULT_IMAGE, URL_API } from "../../../constants";
import { Box } from "@material-ui/core";

const ProductThumbnail = ({ product = {} }) => {
  console.log(product.thumbnail);
  const thumbnail = product.thumbnail ? URL_API + product.thumbnail?.url : DEFAULT_IMAGE;
  return (
    <div>
      <Box padding={3}>
        <img src={`${thumbnail}`} alt={`${product.name}`} width="100%" />
      </Box>
    </div>
  );
};

ProductThumbnail.propTypes = {
  product: PropTypes.object
};

export default ProductThumbnail;
