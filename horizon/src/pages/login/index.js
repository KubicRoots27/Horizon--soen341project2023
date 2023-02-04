import React from "react";
import { Formik, Field, Form } from "formik";

const Login = () => {
  return (
    <div>
      <div className="h-screen bg-pastel_green">
        <div className="w-fit mx-auto pt-96">
          <h1 className="text-3xl font-bold pb-3">Login</h1>

          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <div className="pb-3">
                <Field
                  name="username"
                  placeholder="Username"
                  type="text"
                  className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
                />
              </div>

              <div className="pb-3">
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
                />
              </div>

              <button type="submit" className="bg-slate-400 rounded-md px-3">
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
