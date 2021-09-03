import { Chip, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const FILTER_LIST = [
  {
    id: 1,
    label: () => "Giao hàng miễn phí",
    isActive: (filters) => {
      if (filters.isFreeShip) return true;
      return false;
    },
    isVisible: () => true,
    isToogle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) delete newFilters.isFreeShip;
      else newFilters.isFreeShip = true;

      return newFilters;
    },
    isRemoveAble: false
  },
  {
    id: 2,
    label: () => "Có khuyến mãi",
    isActive: () => true,
    isVisible: (filters) => {
      if (filters.isPromotion) return true;
      return false;
    },
    isRemoveAble: true,
    onDelete: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    }
  },
  {
    id: 3,
    label: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) => {
      if (filters.salePrice_lte && filters.salePrice_gte) return true;
      return false;
    },
    isRemoveAble: true,
    onDelete: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    }
  },
  {
    id: 4,
    label: (filters, category) => {
      if (filters["category.id"]) {
        for (let item of category) {
          if (item.id.toString() === filters["category.id"]) return item.name;
        }
      }
      return null;
    },
    isActive: () => true,
    isVisible: (filters) => {
      if (filters["category.id"]) return true;
      return false;
    },
    isRemoveAble: true,
    onDelete: (filters) => {
      const newFilters = { ...filters };
      delete newFilters["category.id"];
      return newFilters;
    }
  }
];

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "0",
    alignItems: "center",
    flexFlow: "row wrap",
    "& > li": {
      margin: `0 8px`
    }
  }
}));

const FiltersWiewLabel = ({ filters, onChange }) => {
  const category = useSelector((state) => state.product.categories);
  const classes = useStyle();
  const visible = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  return (
    <div>
      <ul className={classes.root}>
        {visible.map((x) => (
          <li key={x.id}>
            <Chip
              size="small"
              label={x.label(filters, category)}
              clickable={!x.isRemoveAble}
              onDelete={
                x.isRemoveAble
                  ? () => {
                      const newFilters = x.onDelete(filters);
                      onChange(newFilters);
                    }
                  : null
              }
              onClick={
                !x.isRemoveAble
                  ? () => {
                      const newFilters = x.isToogle(filters);
                      onChange(newFilters);
                    }
                  : null
              }
              color={x.isActive(filters) ? "primary" : "default"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

FiltersWiewLabel.propTypes = {
  filters: PropTypes.object
};

export default FiltersWiewLabel;
