import { Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const Product_sort = ({ currentValue, handleChangeSort }) => {
  const handleChange = (e, value) => {
    handleChangeSort(value);
  };
  return (
    <div>
      <Tabs value={currentValue} onChange={handleChange}>
        <Tab label="Giá thấp đến cao" value="salePrice:ASC" />
        <Tab label="Giá cao đến thấp" value="salePrice:DESC" />
      </Tabs>
    </div>
  );
};

Product_sort.propTypes = {
  handleChangeSort: PropTypes.func
};

export default Product_sort;
