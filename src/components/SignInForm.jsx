import { TextField, Button, Stack } from '@mui/material';
import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { registerUser } from "../api/Api.jsx";
import { getButtonStyle, inputStyle } from "./utils";

function SignIn({setView, theme}) {
  const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  const validationSchema = Yup.object({
    name: Yup.string().required('Name Required'),
    email: Yup.string()
    .matches(emailRegex, "Invalid email format")
    .required('Email Required'),
    password: Yup.string().min(8, "Minimum 8 characters").required("Password Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password Required")
  });

  const handleFormSubmit = async (values) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password
    };

    const result = await registerUser(payload);

    if (result.id || result.status === "success") {
      alert("Registered Successfully");
      setView("login");
    } else {
      alert(result.message || "Registration Failed");
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmpassword: '' }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, touched, errors, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">

          <Stack spacing={3} alignItems="center">

            <TextField
              placeholder="Name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ width: "260px" }}
              style={inputStyle}
            />

            <TextField
              placeholder="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ width: "260px" }}
              style={inputStyle}
            />

            <TextField
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ width: "260px" }}
              style={inputStyle}
            />

            <TextField
              placeholder="Confirm Password"
              type="password"
              name="confirmpassword"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmpassword && Boolean(errors.confirmpassword)}
              helperText={touched.confirmpassword && errors.confirmpassword}
              sx={{ width: "260px" }}
              style={inputStyle}
            />

            <Button type="submit" variant="contained" sx={{ width: "150px" }}
            style={getButtonStyle(theme)}>
              Sign In
            </Button>
<span>Already have an account?</span>
            <span
              onClick={() => setView("login")}
              style={{ cursor: "pointer", color: '#00549eff', fontWeight: 'bold' }}
            >
               Log in
            </span>

          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default SignIn;
