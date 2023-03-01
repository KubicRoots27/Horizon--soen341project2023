import React from "react";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  return (
    <div>
      <div className="h-screen bg-pastel_green">
        <div className="w-fit mx-auto pt-96">
          <h1 className="text-3xl font-bold pb-3">Signup</h1>

          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
              password: "",
              password2: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.fname) {
                errors.fname = "Required";
              }
              if (!values.lname) {
                errors.lname = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              if (!values.password2) {
                errors.password2 = "Required";
              }
              if (values.password !== values.password2) {
                errors.password2 = "Passwords do not match";
              }
              return errors;
            }}
            onSubmit={async (values) => {
              const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });

              if (response.ok) {
                router.push("/login");
              } else {
                alert(response.statusText);
              }
            }}


            
          >
            {({ errors, touched }) => (
            <Form>
              <div className="pb-3">

                <Field
                  name="fname"
                  placeholder="First name"
                  type="text"
                  className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
                />
                {errors.fname && touched.fname ? (
                  <div className="text-red-500">{errors.fname}</div>
                ) : null}

              </div>

              <div className="pb-3">
                <Field
                  name="lname"
                  placeholder="Last name"
                  type="text"
                  className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
                />
                {errors.lname && touched.lname ? (
                  <div className="text-red-500">{errors.lname}</div>
                ) : null}
              </div>

              <div className="pb-3">
                <Field
                  name="email"
                  placeholder="Email"
                  type="text"
                  className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}

              </div>

              <div className="pb-3">
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}

              </div>

              <div className="pb-3">
                <Field
                  name="password2"
                  placeholder="Confirm password"
                  type="password"
                  className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
                />
                {errors.password2 && touched.password2 ? (
                  <div className="text-red-500">{errors.password2}</div>
                ) : null}
              </div>

              <button type="submit" className="bg-slate-400 rounded-md px-3">
                Signup
              </button>
            </Form>
            )}

          </Formik>

        </div>
      </div>
    </div>
  );
};

export default Signup;
