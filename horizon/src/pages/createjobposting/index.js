import React from "react";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const CreateJobPosting = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <div className="h-screen bg-pastel_green">
      <div className="w-fit mx-auto pt-96">
        <h1 className="text-3xl font-bold pb-3">Create Job Posting</h1>

        <Formik
          initialValues={{
            title: "",
            description: "",
            location: "",
            videoId: "",
            salary: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = "Required";
            }
            if (!values.description) {
              errors.description = "Required";
            }
            if (!values.location) {
              errors.location = "Required";
            }
            if (!values.salary) {
              errors.salary = "Required";
            }
            return errors;
          }}
          onSubmit={async (values) => {
            values = { ...values, employer: session.user._id.toString() };
            console.log(values);
            const response = await fetch("/api/jobs/publishJob", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            if (response.ok) {
              router.push("/profile");
            } else {
              alert(response.statusText);
            }
          }}
        >
          <Form>
            <div className="pb-3">
              <Field
                name="title"
                placeholder="Title"
                type="text"
                className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
              />
            </div>
            <div className="pb-3">
              <Field
                name="description"
                placeholder="Description"
                type="text"
                className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
              />
            </div>
            <div className="pb-3">
              <Field
                name="videoId"
                placeholder="Youtube Video ID"
                type="text"
                className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
              />
            </div>
            <div className="pb-3">
              <Field
                name="location"
                placeholder="Location"
                type="text"
                className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
              />
            </div>
            <div className="pb-3">
              <Field
                name="salary"
                placeholder="Salary"
                type="text"
                className="outline-2 outline-slate-400 bg-slate-200 rounded-md p-1"
              />
            </div>
            <button type="submit" className="bg-slate-400 rounded-md p-1">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateJobPosting;
