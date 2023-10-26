import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authentication/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { StyledForm } from './LoginForm.styled';
import { Title } from '../ui/Title/Title';
import Fingerprint from '@mui/icons-material/Fingerprint';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(logIn(values));
      resetForm();
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('This field cannot be empty'),
      password: yup
        .string()
        .min(6)
        .max(28)
        .required('This field cannot be empty'),
    }),
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Title>Please, login:</Title>
        <TextField
           required
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          sx={{ mb: '45px', width: '300px' }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
           required
          variant="outlined"
          id="password"
          name="password"
          label="Password"
          type="password"
          sx={{ mb: '45px', width: '300px' }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
  
          variant="outlined"
          size="large"
          type="submit"
          endIcon={  <Fingerprint aria-label="fingerprint" color="success"/>}
        >
          Login
        </Button>
      </StyledForm>
    </>
  );
};
