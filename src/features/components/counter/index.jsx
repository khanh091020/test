import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
const useStyle = makeStyles({
  root: {
    background: "linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%)"
  }
});
const Counter = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const styles = useStyle();
  return (
    <div>
      <p>
        <b>{counter}</b>
        <Button className={styles.root} variant="outlined" onClick={(e) => dispatch(increment())}>
          Increase
        </Button>
        <Button className={styles.root} variant="outlined" onClick={(e) => dispatch(decrement())}>
          Decrease
        </Button>
      </p>
    </div>
  );
};

Counter.propTypes = {};

export default Counter;
