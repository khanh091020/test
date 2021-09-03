import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../reducer/productSlice";

const useStyle = makeStyles((theme) => ({
  menu: {
    listStyle: "none",
    paddingLeft: "1.25rem",
    "& .li": {
      padding: ".5rem 0",
      "&:hover": {
        color: "blue"
      }
    }
  }
}));

const FiltersByCategory = ({ onChange }) => {
  const classes = useStyle();
  const categoryFilter = useSelector((state) => state.product.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  const changeCategory = (id) => {
    onChange(id);
  };

  return (
    <div>
      <ul className={`m-0 pt-4 ${classes.menu}`}>
        <li>
          <Typography variant="h6">Danh mục sản phẩm</Typography>
        </li>
        {categoryFilter.map((item) => (
          <li
            className="li"
            onClick={() => {
              changeCategory(item.id);
            }}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

FiltersByCategory.propTypes = {};

export default FiltersByCategory;
