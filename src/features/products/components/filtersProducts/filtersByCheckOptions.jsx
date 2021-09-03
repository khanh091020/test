import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const FiltersByCheckOptions = ({ filters = {}, onChange }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (!onChange) return;
    onChange({ [name]: checked });
  };

  return (
    <div className="pl-4 pt-4">
      <Typography variant="h6">Lọc theo dịch vụ</Typography>
      <FormControlLabel
        control={
          <Checkbox checked={Boolean(filters.isPromotion)} onChange={handleChange} name="isPromotion" color="primary" />
        }
        label="Có giảm giá"
      />{" "}
      <br />
      <FormControlLabel
        control={
          <Checkbox checked={Boolean(filters.isFreeShip)} onChange={handleChange} name="isFreeShip" color="primary" />
        }
        label="Có free ship"
      />
    </div>
  );
};

FiltersByCheckOptions.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object
};

export default FiltersByCheckOptions;
