import { Avatar, makeStyles, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Auth/userSlice";
import LoginForm from "../loginForm/index";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main
  },
  title: {
    margin: theme.spacing(2, 0, 2)
  }
}));
const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitForm = async (data) => {
    try {
      const response = await dispatch(login(data));
      const user = unwrapResult(response);
      props.closeDislog();
      enqueueSnackbar("Login sucessfully ! ", {
        variant: "success"
      });
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error"
      });
    }
  };

  return (
    <div styles={{ position: "relative" }}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography className={classes.title} component="h1" variant="h4" align="center">
        Login
      </Typography>
      <LoginForm handleSubmitForm={handleSubmitForm} />
    </div>
  );
};

Login.propTypes = {};

export default Login;
