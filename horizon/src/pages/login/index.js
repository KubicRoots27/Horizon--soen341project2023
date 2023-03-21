import React from "react";
import { Formik, Field, Form } from "formik";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  return (
    <div>
      <div className="h-screen bg-pastel_green">
        <div className="w-fit mx-auto pt-96">
          <h1 className="text-3xl font-bold pb-3">Login</h1>

          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values) => {
              await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
              }).then((res) => {
                if (res.error) {
                  alert(res.error);
                } else {
                  router.push("/profile");
                }
              });
            }}
          >
            <Form>
              <div className="pb-3">
                <Field
                  name="email"
                  placeholder="Email"
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
        <div className="w-fit mx-auto pt-3">
          Don't have an account?{" "}
          <Link className="text-blue-600" href="/signup">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
