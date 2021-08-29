import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const InputField = (props) => {
  const { register, handleSubmit } = useForm();
  const refs = props.refs;
  return (
    <TextField
      {...register(props.name, { required: true })}
      name={props.name}
      helperText={props.helperText}
      label={props.label}
    />
  );
};

export default InputField;
