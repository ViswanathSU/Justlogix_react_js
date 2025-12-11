import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Stack } from "@mui/material";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { loginUser } from "../api/Api.jsx";
import Cookies from 'js-cookie';
import { getButtonStyle, inputStyle } from "./utils";

function LoginForm({theme}) {

  const [remember, setRemember] = useState(false);
  const [savedEmail, setSavedEmail] = useState("");

  // for remember me
  const email = Cookies.get("userEmail");
  useEffect(() => {
    if (email) {
      setSavedEmail(email);
      setRemember(true);
    }
  }, [email]);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().min(8, "Minimum 8 characters").required("Password is required")
  });

  const handleFormSubmit = async (values) => {
    const result = await loginUser(values);

    if (result.status === "success") {
      alert("Login Successful");

      // Save email cookie
      if (remember) {
        Cookies.set("userEmail", values.email, { expires: 1/1440 });
        console.log(remember);
        
      } else {
        Cookies.remove("userEmail");
      }

    } else {
      alert(result.message || "Invalid Credentials");
    }
  };

  return (
    <Formik
      initialValues={{ email: savedEmail, password: '' }}
      enableReinitialize={true}   // needed to update Formik when cookie loads
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, touched, errors, handleChange, handleBlur, values }) => (
        <Form onSubmit={handleSubmit} >

          <Stack spacing={3} alignItems="center">

      <TextField
        placeholder="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        sx={{ width: "260px", }}
        style={inputStyle}
      />

            <TextField
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ width: "260px" }}
              style={inputStyle}
            />

            <FormControlLabel
              control={
                <Checkbox 
                  checked={remember} 
                  onChange={(e) => setRemember(e.target.checked)} 
                />
              }
              label="Remember me"
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ width: "150px"}}
              style={getButtonStyle(theme)}
            >
              Login
            </Button>

          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
