import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const JobPosting = ({ jobPosting }) => {
  const { data: session, status } = useSession();

  const [userId, setUserId] = useState("");
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (status !== "loading" && status !== "unauthenticated") {
      setUserId(session.user._id.toString());
    }
  }, [session]);

  useEffect(() => {
    if (status !== "loading" && status !== "unauthenticated") {
      if (session.user.accountType === "student" && userId !== "") {
        const fetchJobPostings = async () => {
          const response = await fetch("http://localhost:3000/api/jobs");
          const data = await response.json();
          if (data.jobs !== undefined) {
            const currentJob = data.jobs.filter(
              (job) => job._id === jobPosting._id
            );
            if (currentJob[0].applicants.includes(userId)) {
              setApplied(true);
            }
          }
        };
        fetchJobPostings();
      }
    }
  }, [userId]);

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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-2xl font-bold">Job Posting: {jobPosting.title}</div>
      <div>
        Description: {jobPosting.description}
        <br />
        Location: {jobPosting.location}
        <br />
        Salary: {jobPosting.salary}
        <br />
        Employer: {jobPosting.employer}
        <br />
        Date Posted: {jobPosting.datePosted}
        <br />
      </div>
      {session && session.user.accountType === "student" && !applied && (
        <button
          className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5"
          onClick={() => {
            const apply = async () => {
              const response = await fetch(
                `http://localhost:3000/api/jobs/apply/${jobPosting._id}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    student: session.user._id,
                  }),
                }
              );
              if (response.ok) {
                setApplied(true);
              }
              const data = await response.json();
            };
            apply();
          }}
        >
          Apply
        </button>
      )}

      {session && session.user.accountType === "student" && applied && (
        <div className="text-2xl font-bold">You have already applied!</div>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await fetch(`http://localhost:3000/api/jobs/${id}`);
  const data = await response.json();
  return {
    props: {
      jobPosting: data.job,
    },
  };
};

export default JobPosting;
