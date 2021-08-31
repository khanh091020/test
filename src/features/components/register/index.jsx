import { Avatar, makeStyles, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../Auth/userSlice";
import RegisterForm from "../registerForm";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main
  },
  title: {
    margin: theme.spacing(2, 0, 2)
  }
}));
const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitForm = async (data) => {
    try {
      data.username = data.email;
      delete data.retypePassword;
      const response = await dispatch(register(data));

      const user = unwrapResult(response);
      props.closeDislog();
      enqueueSnackbar("Register sucessfully ! ", {
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
        Sign up
      </Typography>
      <RegisterForm handleSubmitForm={handleSubmitForm} />
    </div>
  );
};

Register.propTypes = {};

export default Register;
