import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

const divRootStyle = {
  marginTop: "10px",
  borderTop: "4px solid #cac9c9"
};

const FiltersBySalePrice = ({ onChange }) => {
  const [salePrice, setSalePrice] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0
  });

  const handleSubmit = () => {
    onChange(salePrice);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalePrice((salePrice) => ({
      ...salePrice,
      [name]: value
    }));
  };

  return (
    <div className="pl-4 pt-4" style={divRootStyle}>
      <Typography variant="h6">Lọc theo giá</Typography>
      <TextField
        label="Từ khoảng giá"
        type="number"
        name="salePrice_gte"
        value={salePrice.salePrice_gte}
        onChange={handleChange}
      />
      <TextField
        label="Đến khoảng giá"
        type="number"
        name="salePrice_lte"
        value={salePrice.salePrice_lte}
        onChange={handleChange}
      />
      <Button className="mt-3" color="primary" variant="outlined" onClick={() => handleSubmit()}>
        Áp dụng
      </Button>
    </div>
  );
};

FiltersBySalePrice.propTypes = {};

export default FiltersBySalePrice;
