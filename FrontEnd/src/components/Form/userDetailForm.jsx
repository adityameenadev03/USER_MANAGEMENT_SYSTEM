import React, { useEffect, useState } from "react";
import { Field, Form, Formik, useFormikContext } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "./styles.css";
import { userDataSchema } from "../../schema/userDataSchema";

// import { Button, Card } from "react-bootstrap";
const UserDetailForm = () =>
  // { editing }
  {
    return (
      <>
        <Formik
          initialValues={{ name: "", email: "", phone: "", gender: null }}
          validateOnMount:true
          onSubmit={(values, actions) => {
            console.log(values);
          }}
          validationSchema={userDataSchema}
        >
          {({ errors, touched, isSubmitting, isValid }) => (
            <Form>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Enter your Name"
              />

              {errors.name && touched.name ? (
                <div className="error">{errors.name}</div>
              ) : null}

              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                id="email"
                name="email"
                placeholder="Enter Your Email"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <Field
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                type="tel"
                maxLength={10}
              />
              {errors.phone && touched.phone ? (
                <div className="error">{errors.phone}</div>
              ) : null}

              <Box
                role="group"
                sx={{
                  display: "flex",
                  alignItems: "center",

                  marginTop: 1,
                }}
              >
                <span>Gender : </span>
                <label className="formik_label">
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label className="formik_label">
                  <Field
                    className="formik_field"
                    type="radio"
                    name="gender"
                    value="female"
                  />
                  Female
                </label>
                {errors.gender && touched.gender ? (
                  <div className="error">{errors.gender}</div>
                ) : null}
              </Box>

              {/* <Button
          type="submit"
          className={
            isValid
              ? "bg-primary text-white mt-3"
              : "bg-primary text-white mt-3 opacity-25"
          }
          disabled={isSubmitting || (editing && !isValid)}
        >
          {editing ? "Save" : "Submit"}
        </Button> */}

              <Button
                type="submit"
                variant="contained"
                sx={
                  isValid
                    ? { marginTop: "20px" }
                    : { marginTop: "20px", opacity: 0.6 }
                }
                className={
                  isValid
                    ? "bg-primary text-white mt-3"
                    : "bg-primary text-white mt-3 opacity-25"
                }
                // disabled={isSubmitting || (false && !isValid)}
                disabled={isValid && false}
              >
                {false ? "Save" : "Submit"}
              </Button>
            </Form>
          )}
        </Formik>
      </>
    );
  };

export default UserDetailForm;
