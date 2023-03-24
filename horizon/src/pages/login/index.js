import React from "react";
import { Formik, Field, Form } from "formik";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  
  return (
    <div className="flex justify-center bg-cyan-600 dark:bg-cyan-900 h-26 p-16">
      <div className="bg-white dark:bg-slate-900 shadow-md rounded-md p-16 pb-8">
        <h1 className="text-3xl dark:text-white font-bold text-center pb-6">Login</h1>
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
          <Form className="text-center">
            <div className="pb-3">
              <Field
                name="email"
                placeholder="Email"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="pb-3">
              <Field
                name="password"
                placeholder="Password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-cyan-600 py-2 px-4 font-bold text-white hover:bg-cyan-800 focus:outline-none"
            >
              Login
            </button>
          </Form>
        </Formik>
        <div></div>
        <div className="flex justify-center items-center pt-12">
          <div className="w-fit mx-auto dark:text-white">
            Don't have an account?{" "}
            <Link className="text-cyan-700" href="/signup">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Login;

