import React from "react";
import { Formik } from "formik";

const Login = () => {
  return (
    <div>
      <h1>Login page</h1>
      <div className="">
        <div className="w-fit mx-auto">
          <form>
            <h2>Username</h2>
            <div>
              <input
                type="text"
                className="outline-2 outline-slate-400 bg-slate-200 rounded-md"
              ></input>
            </div>

            <h2>Password</h2>
            <div>
              <input
                type="text"
                className="outline-2 outline-slate-400 bg-slate-200 rounded-md"
              ></input>
            </div>

            <button className="bg-slate-400 rounded-md mt-3 px-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
