import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().required('Please enter title').min(5, 'At least 5 characters required'),
});

const TodoForm = ({ handleSubmitForm }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleCheck = formState.touchedFields['title'] && errors['title'];
  const onSubmit = (data) => {
    handleSubmitForm(data.title);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('title', { required: true })}
          name="title"
          helperText="Please enter your todo"
          label="add todo"
          error={!!handleCheck}
          helperText={errors.title?.message}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default TodoForm;
