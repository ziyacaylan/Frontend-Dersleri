import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Basic = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="FirstName" />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
