import React from "react";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const EditProfile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-russian_green"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-2xl font-bold text-russian_green">
          You are not logged in!
        </div>
        <div className="text-2xl font-bold text-russian_green">
          <Link href="/login">
            <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
      <div className="bg-blue-300 min-h-screen text-black min-h-screen">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"></div>
        <div className="w-fit m-auto py-14 px-4">
        <h1 className="text-3xl text-center font-extrabold text-gray-900 mb-8">Edit Your Profile</h1>

        <Formik
          initialValues={{
            fname: session.user.fname,
            lname: session.user.lname,
            email: session.user.email,
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
            values.originalEmail = session.user.email;
            const response = await fetch("/api/auth/editprofile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              alert("Profile updated successfully! You will be logged out.");
              signOut();
              router.push("/login");
            } else {
              alert(response.statusText);
            }
          }}
        >
          <Form>
            <Field
              name="fname"
              placeholder="First name"
              type="text"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-3 mb-3"
            />
            <Field
              name="lname"
              placeholder="Last name"
              type="text"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-3 mb-3"
            />
            <Field
              name="email"
              placeholder="Email"
              type="text"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-3 mb-3"
            />
            <Field
              name="password"
              placeholder="Password"
              type="password"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-3 mb-3"
            />
            <Field
              name="password2"
              placeholder="Confirm password"
              type="password"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-3 mb-3"
            />
            <button type="submit" className="px-5 py-5 bg-indigo-700 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Edit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
