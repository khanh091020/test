import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormHelperText, LinearProgress, makeStyles, TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Please enter full name")
    .test("Please enter at least two word", "Please enter at least two word", (value) => {
      return value.split(" ").length >= 2;
    }),
  email: yup.string().required("Please enter email").email("Please enter a valid email"),
  password: yup.string().required("Please enter password").min(6, "At least 6 characters required"),
  retypePassword: yup
    .string()
    .required("Please enter retype password")
    .oneOf([yup.ref("password")], "Retype password is not equal")
});

const useStyle = makeStyles((theme) => ({
  submitBtn: {
    margin: theme.spacing(2, 0, 2, 0)
  },
  process: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "5px"
  }
}));

const RegisterForm = ({ handleSubmitForm }) => {
  const classes = useStyle();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const isSubmitting = formState.isSubmitting;
  const handleCheckFullName = errors["fullName"];
  const handleCheckEmail = errors["email"];
  const handleCheckPassword = errors["password"];
  const handleCheckRetypePassword = errors["retypePassword"];
  const onSubmit = async (data) => {
    await handleSubmitForm(data);
  };

  return (
    <>
      {isSubmitting && <LinearProgress color="secondary" className={classes.process} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          {...register("fullName", { required: true })}
          name="fullName"
          label="Full name"
          variant="outlined"
          margin="dense"
          error={!!handleCheckFullName}
          helperText={errors.fullName?.message}
        />
        <TextField
          fullWidth
          {...register("email", { required: true })}
          name="email"
          label="Enter your email"
          variant="outlined"
          margin="dense"
          error={!!handleCheckEmail}
          helperText={errors.email?.message}
        />

        <FormControl fullWidth variant="outlined" margin="dense" error={!!handleCheckPassword}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            label="password"
            name="password"
            {...register("password", { required: true })}
            type={showPassword ? "text" : "password"}
            // value={values.password}
            // onChange={handleChange('password')}

            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>

        <FormControl fullWidth variant="outlined" margin="dense" error={!!handleCheckRetypePassword}>
          <InputLabel htmlFor="retypePassword">Retype password</InputLabel>
          <OutlinedInput
            name="retypePassword"
            {...register("retypePassword", { required: true })}
            label="Retype password"
            type={showPassword ? "text" : "password"}
            // value={password}
            // onChange={handleChange('retypePassword')}

            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle retypePassword visibility" onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{errors.retypePassword?.message}</FormHelperText>
        </FormControl>
        <Button
          disabled={isSubmitting}
          className={classes.submitBtn}
          fullWidth
          color="secondary"
          size="medium"
          variant="outlined"
          type="submit"
        >
          Create account
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
