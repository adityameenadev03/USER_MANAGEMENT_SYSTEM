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
import { signupUser } from "../../redux/actions/authActions";

const SignUp = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //   const navigate = useNavigate();

  const saveUseronDatabase = async (values) => {
    dispatch(signupUser("/user/signupUser", values));
    navigate("/displayUserData");
  };
  return (
    <Container
      sx={{
        width: 400,
        padding: "20px 20px",
        boxShadow: 3,
        borderRadius: "8px",
        border: "2px solid",
        borderColor: "lightgray",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" margin={2}>
        {" "}
        Signup{" "}
      </Typography>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          saveUseronDatabase(values);
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
              as={TextField}
              label="Name"
              name="name"
              sx={{ mb: 2 }}
              fullWidth
              variant="outlined"
              margin="dense"
              required
              helperText={<ErrorMessage name="name" />}
              error={errors.name && touched.name}
            />

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
                SignUp
              </Typography>
            </Button>
            <Typography variant="subtitle2" component="p" margin={2}>
              Already a user{" "}
              <Link to="/login" className="link_tag" color="green">
                Login here
              </Link>
            </Typography>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
