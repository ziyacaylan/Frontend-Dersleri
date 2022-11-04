import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import validationSchema from "./validations";

import { fetchRegister } from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
import "../Signin/style.css";

function Signup() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      //console.log(values);
      try {
        const registerResponse = await fetchRegister({
          email: values.email,
          password: values.passwordConfirm,
        });
        login(registerResponse);
        console.log(registerResponse);
      } catch (error) {
        bag.setErrors({ general: error.response.data.message });
      }
    },
  });
  return (
    <div>
      <div class="header">
        <div class="inner-header flex">
          <Flex
            align="center"
            minWidth="350px"
            width="20%"
            justifyContent="center"
            boxShadow="dark-lg"
            p="6"
            rounded="md"
            // bg="white"
          >
            <Box pt="10">
              <Box textAlign="center">
                <Heading>Sign Up</Heading>
                <Box my="5">
                  {formik.errors.general && (
                    <Alert status="error">{formik.errors.general}</Alert>
                  )}
                </Box>
              </Box>
              <Box my="5" textAlign="left">
                <form onSubmit={formik.handleSubmit}>
                  <FormControl>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      isInvalid={formik.touched.email && formik.errors.email}
                    ></Input>
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      isInvalid={
                        formik.touched.password && formik.errors.password
                      }
                    ></Input>
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Password Confirm</FormLabel>
                    <Input
                      name="passwordConfirm"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.passwordConfirm}
                      isInvalid={
                        formik.touched.passwordConfirm &&
                        formik.errors.passwordConfirm
                      }
                    ></Input>
                  </FormControl>
                  <Button mt="4" width="full" type="submit" colorScheme="teal">
                    Sign Up
                  </Button>
                </form>
              </Box>
            </Box>
          </Flex>
        </div>

        <div>
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Signup;
