import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const JobPostings = () => {
  const { data: session, status } = useSession();
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const fetchJobPostings = async () => {
      const response = await fetch("http://localhost:3000/api/jobs");
      const data = await response.json();
      const openJobs = data.jobs.filter((job) => job.status === "Open");
      setJobPostings(openJobs);
    };
    fetchJobPostings();
  }, []);

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
    <div class="bg-blue-300 min-h-screen">
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h1 class="text-3xl text-center font-extrabold text-gray-900 mb-8">Job Postings</h1>
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
    <div class="bg-slate-300 rounded-lg shadow-lg overflow-hidden">
      <div class="px-6 py-4">
      {jobPostings.map((jobPosting) => (
        <div key={jobPosting._id} className="bg-slate-200 rounded-md p-5 my-3">
          <h2>
            <span className="font-bold">Title: </span>
            {jobPosting.title}
          </h2>
          <p>
            <span className="font-bold">Description: </span>
            {jobPosting.description}
          </p>
          <p>
            <span className="font-bold">Status: </span>
            {jobPosting.status}
          </p>
          <p>
            <span className="font-bold">Company: </span>
            {jobPosting.company}
          </p>
          <p>
            <span className="font-bold">Location: </span>
            {jobPosting.location}
          </p>
          <p>
            <span className="font-bold">Salary: </span>
            {jobPosting.salary}
          </p>

          <Link href={`/jobpostings/${jobPosting._id}`}>
            <button className="bg-indigo-700 text-white rounded hover:outline outline-2 p-2 mt-2">
              View Job Posting
            </button>
          </Link>

          <br />
        </div>
      ))}
    </div></div></div></div>
  );
};

export default JobPostings;
