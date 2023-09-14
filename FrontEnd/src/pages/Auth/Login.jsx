import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { signupSchema } from "../../schema/signupSchema";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { SET_USER } from "../../redux/actions/types";
import { loginUser, signupUser } from "../../redux/actions/authActions";
import { loginSchema } from "../../schema/loginSchema";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //   const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const data = await loginUser("/user/loginUser", values);
      console.log(data);
      if (data) {
        dispatch(SET_USER(data));
        navigate("/displayUserData");
      }

      console.log("fetch from server", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container
      elevation="4"
      sx={{
        width: 400,
        padding: "20px 20px",
        boxShadow: 4,
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" margin={2}>
        {" "}
        Login{" "}
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          handleLogin(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <Form component="form">
            <Field
              variant="outlined"
              as={TextField}
              sx={{ mb: 2 }}
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText={<ErrorMessage name="email" />}
              error={errors.email && touched.email}
            />

            <Field
              as={TextField}
              variant="outlined"
              sx={{ mb: 2 }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              helperText={<ErrorMessage name="password" />}
              error={errors.password && touched.password}
            />
            <Button
              variant="contained"
              sx={{ mt: 1 }}
              type="submit"
              disabled={isSubmitting}
            >
              <Typography variant="inherit" component="p">
                Login
              </Typography>
            </Button>
            <Typography variant="subtitle2" component="p" margin={2}>
              Not a User{" "}
              <Link to="/signup" className="link_tag">
                Signup here
              </Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
