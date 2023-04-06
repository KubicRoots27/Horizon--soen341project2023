import React from "react";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";

const EditJobPosting = ({ jobPosting }) => {
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
    <div className="h-screen bg-pastel_green">
      <div className="w-fit mx-auto pt-96">
        <h1 className="text-3xl font-bold pb-3">Edit Job Posting</h1>

        <Formik
          initialValues={{
            title: jobPosting.title,
            description: jobPosting.description,
            location: jobPosting.location,
            videoId: jobPosting.videoId,
            salary: jobPosting.salary,
            status: jobPosting.status,
          }}
          validate={(values) => {
            // Add validation here
          }}
          onSubmit={async (values) => {
            const response = await fetch(
              `http://localhost:3000/api/jobs/${jobPosting._id}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            );

            if (response.ok) {
              alert(
                "Job Posting updated successfully! You will be redirected to the dashboard."
              );
              router.push("/dashboard/employer");
            } else {
              alert(response.statusText);
            }
          }}
        >
          <Form>
            <Field
              name="title"
              placeholder="Job title"
              type="text"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-1 mb-2"
            />
            <Field
              name="description"
              placeholder="Job description"
              type="text"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-1 mb-2"
            />
            <Field
              name="location"
              placeholder="Job location"
              type="text"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-1 mb-2"
            />
            <Field
              name="videoId"
              placeholder="Job videoId"
              type="text"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-1 mb-2"
            />
            <Field
              name="salary"
              placeholder="Job salary"
              type="text"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-1 mb-2"
            />
            <Field
              name="status"
              placeholder="Job status"
              as="select"
              className="flex outline-2 outline-slate-400 bg-slate-200 rounded-md p-1 mb-2"
            >
              <option value="open">open</option>
              <option value="closed">closed</option>
            </Field>
            <button type="submit" className="bg-slate-400 rounded-md px-3">
              Edit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { jobId } = context.query;

  const res = await fetch(`http://localhost:3000/api/jobs/${jobId}`);
  const data = await res.json();

  return {
    props: {
      jobPosting: data.job,
    },
  };
};

export default EditJobPosting;
