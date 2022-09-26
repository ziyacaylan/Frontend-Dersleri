import React from "react";
import "./App.css";
import { useFormik, validateYupSchema } from "formik";

import validationSchema from "./components/validations";

const App = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        gender: "male",
        hobies: [],
        country: "",
      },
      onSubmit: (values) => {
        //alert(JSON.stringify(values, null, 2));
        console.log(values);
      },
      validationSchema,
    });
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
        </div>
        <input
          name="firstName"
          onChange={handleChange}
          placeholder="Enter First Name"
          value={values.firstName}
          onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName && (
          <div className="error">{errors.firstName}</div>
        )}
        <br />
        <br />
        <div>
          <label htmlFor="lastName">Last Name</label>
        </div>
        <input
          name="lastName"
          onChange={handleChange}
          placeholder="Enter Last Name"
          value={values.lastName}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && (
          <div className="error">{errors.lastName}</div>
        )}
        <br />
        <br />
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          type="email"
          value={values.email}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br />
        <br />
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          name="password"
          onChange={handleChange}
          placeholder="Enter Password"
          type="password"
          value={values.password}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <div>
          <label htmlFor="passwordConfirm">Password Confirm</label>
        </div>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          placeholder="Enter Password"
          type="password"
          value={values.passwordConfirm}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />
        <br />
        <br />
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Photography
        </div>
        {errors.hobies && touched.hobies && (
          <div className="error">{errors.hobies}</div>
        )}
        <br />
        <br />
        <span style={{ paddingRight: "10px" }}>Ülke</span>
        <select
          name="country"
          defaultValue={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option disabled value="">
            {" "}
            -- select an option --{" "}
          </option>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">Usa</option>
        </select>
        {errors.country && touched.country && (
          <div className="error">{errors.country}</div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code
          style={{
            display: "block",
            width: "400px",
            overflowWrap: "break-word",
            marginBottom: "20px",
          }}
        >
          {JSON.stringify(values)}
        </code>
      </form>
    </div>
  );
};

export default App;
