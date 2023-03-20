import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Card from "../../../../components/ui/card";
import Link from "next/link";

const EmployerDashboard = () => {
  const { data: session, status } = useSession();

  const [userId, setUserId] = useState("");
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    if (status !== "loading" && status !== "unauthenticated") {
      setUserId(session.user._id.toString());
    }
  }, [session]);

  useEffect(() => {
    if (status !== "loading" && status !== "unauthenticated") {
      if (session.user.accountType === "employer" && userId !== "") {
        const fetchJobPostings = async () => {
          const response = await fetch("http://localhost:3000/api/jobs");
          const data = await response.json();

          if (data.jobs !== undefined) {
            const filteredData = data.jobs.filter(
              (job) => job.employer === userId
            );
            setJobPostings(filteredData);
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

  if (session.user.accountType !== "employer") {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-2xl font-bold">You are not an employer!</div>
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
    <div>
      <Card width="w-3/4 lg:w-3/4">
        <div className="text-2xl font-bold text-russian_green">
          Current Job Postings:
        </div>
        {jobPostings.length === 0 && (
          <div className="text-xl font-bold text-russian_green">
            You have no job postings!
          </div>
        )}
        {jobPostings.map((jobPosting) => (
          <div
            className="bg-slate-400 m-2 ml-0 p-4 rounded-md"
            key={jobPosting._id}
          >
            <h2>Title: {jobPosting.title}</h2>
            <p> Description: {jobPosting.description}</p>
            {jobPosting.chosenApplicant === null && (
              <h2 className="font-bold">Applicants:</h2>
            )}
            {jobPosting.applicants && jobPosting.applicants.length === 0 && (
              <div className="text-xl font-bold ">No applications yet!</div>
            )}
            {jobPosting.chosenApplicant && (
              <div className="">
                Chosen applicant: {jobPosting.chosenApplicant}
              </div>
            )}

            {jobPosting.applicants &&
              jobPosting.chosenApplicant === null &&
              jobPosting.applicants.map((applicant) => (
                <div key={applicant}>
                  <Link
                    className="text-blue-600 underline mr-5"
                    href={`/profile/${applicant}`}
                  >
                    {applicant}
                  </Link>
                  <button
                    className="bg-green-800 p-1 rounded-md mr-2 hover:outline outline-2"
                    onClick={() => {
                      const apply = async () => {
                        const response = await fetch(
                          `http://localhost:3000/api/jobs/acceptcandidate/${jobPosting._id}`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              student: applicant,
                            }),
                          }
                        );
                        const data = await response.json();
                      };
                      apply();
                    }}
                  >
                    Accept
                  </button>
                  <button className="bg-red-600 p-1 rounded-md hover:outline outline-2">
                    Reject
                  </button>
                </div>
              ))}

            <br />
          </div>
        ))}
        <div className="text-2xl font-bold text-russian_green">
          <Link href="/createjobposting">
            <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
              Create a Job Posting
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default EmployerDashboard;
