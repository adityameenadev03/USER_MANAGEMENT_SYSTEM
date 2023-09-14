import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { MuiTelInput } from "mui-tel-input";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import "./AddUserFormFormik.css";

import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, editUser } from "../../redux/actions/userActions";
import { userDataSchema } from "../../schema/userDataSchema";

const AddUserFormFormik = () => {
  const [editing, setEditing] = useState(false);
  const unique_id = uuid().slice(0, 8);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataArray = useSelector((state) => state?.users?.dataArray);

  const { id } = useParams();
  console.log(id);
  let data;
  if (id) {
    data = dataArray.find((item) => item.personId == id);
  }

  const initialValues = data
    ? data
    : { name: "", email: "", phone: "", gender: null };

  useEffect(() => {
    if (id) {
      setEditing(true);
    }
  }, [id]);

  console.log(editing);
  return (
    <Formik
      initialValues={initialValues}
      validateOnMount:true
      onSubmit={(values, actions) => {
        if (editing) {
          console.log("editing", values);
          dispatch(editUser("/userData/editUser", { ...values }));
        } else {
          console.log("values to be added", values);
          dispatch(
            addUser("/userData/addUser", {
              ...values,
              personId: unique_id,
            })
          );
          actions.resetForm();
        }
        navigate("/");
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
            as={TextField}
            helperText={<ErrorMessage name="name" />}
            error={errors.name && touched.name}
            placeholder="Enter your Name"
            fullWidth
            variant="outlined"
            margin="dense"
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Field
            id="email"
            name="email"
            placeholder="Enter Your Email"
            type="email"
            as={TextField}
            helperText={<ErrorMessage name="email" />}
            error={errors.email && touched.email}
            sx={{ mb: 2 }}
            fullWidth
            variant="outlined"
            margin="dense"
            required
          />
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <Field
            id="phone"
            name="phone"
            placeholder="Enter Your Phone Number"
            type="text"
            as={TextField}
            maxLength={10}
            helperText={<ErrorMessage name="phone" />}
            error={errors.phone && touched.phone}
            sx={{ mb: 2 }}
            fullWidth
            variant="outlined"
            margin="small"
            required
          />

          <Field
            name="gender"
            helperText={<ErrorMessage name="gender" />}
            error={errors.gender && touched.gender}
          >
            {({ field }) => (
              <>
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <RadioGroup
                  {...field}
                  //   sx={{ display: "inline" }}
                  value={field.value || null}
                  onChange={(e) => field.onChange(e)}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </>
            )}
          </Field>

          <Button
            type="submit"
            variant="contained"
            sx={
              isValid
                ? {
                    marginTop: "20px",
                    width: "100%",
                  }
                : {
                    width: "300px",
                    marginTop: "20px",
                    opacity: 0.6,
                  }
            }
            disabled={isSubmitting || (editing && !isValid)}
          >
            {editing ? "Save" : "Submit"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddUserFormFormik;
