import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Card from "../../../../components/ui/card";
import Link from "next/link";

const StudentDashboard = () => {
  const { data: session, status } = useSession();

  const [userId, setUserId] = useState("");
  const [jobApplications, setjobApplications] = useState([]);

  useEffect(() => {
    if (status !== "loading" && status !== "unauthenticated") {
      setUserId(session.user._id.toString());
    }
  }, [session]);

  useEffect(() => {
    if (status !== "loading" && status !== "unauthenticated") {
      if (session.user.accountType === "student" && userId !== "") {
        const fetchJobApplications = async () => {
          const response = await fetch("http://localhost:3000/api/jobs");
          const data = await response.json();

          if (data.jobs !== undefined) {
            const filteredData = data.jobs.filter((job) =>
              job.applicants.includes(userId)
            );
            setjobApplications(filteredData);
          }
        };
        fetchJobApplications();
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

  if (session.user.accountType !== "student") {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-2xl font-bold">You are not a student!</div>
        <div className="text-2xl font-bold">
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
    <Card width="w-3/4 lg:w-3/4">
      <div className="text-2xl font-bold">Current Job Applications:</div>
      {jobApplications.length === 0 && (
        <div className="text-xl font-bold">You have no job applications!</div>
      )}
      {jobApplications.map((jobApplication) => (
        <div
          className="bg-slate-400 m-2 ml-0 p-4 rounded-md"
          key={jobApplication._id}
        >
          <h2>Title: {jobApplication.title}</h2>
          <p> Description: {jobApplication.description}</p>
          <p> Location: {jobApplication.location}</p>
          <p> Salary: {jobApplication.salary}</p>
          <p> Status: {jobApplication.status}</p>
          {jobApplication.chosenApplicant === userId && (
            <p> You have been chosen for this job!</p>
          )}
          {jobApplication.chosenApplicant !== userId &&
            jobApplication.chosenApplicant !== null && (
              <p> You have not been chosen for this job.</p>
            )}
        </div>
      ))}

      <div className="text-2xl font-bold text-russian_green">
        <Link href="/jobpostings">
          <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
            Browse Jobs Postings
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default StudentDashboard;
