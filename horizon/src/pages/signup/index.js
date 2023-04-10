import React from "react";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [showCompanyNameInput, setShowCompanyNameInput] = useState(false);
//return value
  return (
    <div>
      <div className="flex justify-center bg-lime-600 h-26 p-16">
        <div className="bg-white shadow-md rounded-md p-16 w-1/3 pb-8">
          <h1 className="text-3xl text-center font-bold pb-3">Sign Up</h1>
          <Formik
            initialValues={{
              fname: "",
              lname: "",
              email: "",
              accountType: "",
              companyName: "",
              password: "",
              password2: "",
            }}
            validate={(values) => {
              const errors = {};
              // First name
              if (!values.fname) {
                errors.fname = "Required";
              }

              // Last name
              if (!values.lname) {
                errors.lname = "Required";
              }

              // Email
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              // Account type
              if (!values.accountType) {
                errors.accountType = "Required";
              }

              // Company name
              if (values.accountType === "employer") {
                setShowCompanyNameInput(true);
              } else {
                setShowCompanyNameInput(false);
              }
              if (showCompanyNameInput) {
                if (!values.companyName) {
                  errors.companyName = "Required";
                }
              }

              // Password
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length < 6) {
                errors.password = "Password must be at least 6 characters";
              }

              // Confirm password
              if (!values.password2) {
                errors.password2 = "Required";
              } else if (values.password !== values.password2) {
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
              <Form className="text-center">
                <div className="pb-3">
                  <Field
                    name="fname"
                    placeholder="First name"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </div>

                <div className="pb-3">
                  <Field
                    name="accountType"
                    placeholder="Account type"
                    as="select"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select account type</option>
                    <option value="student">Student</option>
                    <option value="employer">Employer</option>
                    <option value="admin">Admin</option>
                  </Field>
                  {errors.accountType && touched.accountType ? (
                    <div className="text-red-500">{errors.accountType}</div>
                  ) : null}
                </div>
                {showCompanyNameInput ? (
                  <div className="pb-3">
                    <Field
                      name="companyName"
                      placeholder="Company name"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.companyName && touched.companyName ? (
                      <div className="text-red-500">{errors.companyName}</div>
                    ) : null}
                  </div>
                ) : null}

                <div className="pb-3">
                  <Field
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-red-500">{errors.password}</div>
                  ) : null}
                </div>

                <div className="pb-6">
                  <Field
                    name="password2"
                    placeholder="Confirm password"
                    type="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.password2 && touched.password2 ? (
                    <div className="text-red-500">{errors.password2}</div>
                  ) : null}
                </div>

                <button type="submit" className="focus:shadow-outline rounded bg-lime-600 py-2 px-4 font-bold text-white hover:bg-lime-800 focus:outline-none">
                  Sign up
                </button>
              </Form>
            )}
          </Formik>
          <div className="w-fit mx-auto pt-12">
          Already have an account?{" "}
          <Link className="text-blue-600" href="/login">
            Login
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
