import PropTypes from "prop-types";
import React from "react";
import FiltersByCategory from "./FiltersByCategory";
import FiltersByCheckOptions from "./filtersByCheckOptions";
import FiltersBySalePrice from "./FiltersBySalePrice";

const FiltersProducts = ({ filters, onChange }) => {
  const handleFilterCategory = (idCategory) => {
    const newFilters = {
      ...filters,
      "category.id": idCategory
    };
    onChange(newFilters);
  };

  const handlFilterPrice = (priceCondition) => {
    const newFilters = {
      ...filters,
      ...priceCondition
    };
    onChange(newFilters);
  };

  const handleOnchangeCheckService = (object) => {
    const newFilters = {
      ...filters,
      ...object
    };
    onChange(newFilters);
  };

  return (
    <div>
      <FiltersByCategory onChange={handleFilterCategory} />
      <FiltersBySalePrice onChange={handlFilterPrice} />
      <FiltersByCheckOptions filters={filters} onChange={handleOnchangeCheckService} />
    </div>
  );
};

FiltersProducts.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

export default FiltersProducts;
