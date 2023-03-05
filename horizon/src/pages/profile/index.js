import { useSession, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Card from "../../../components/ui/card";
import { useRouter } from "next/router";
import Link from "next/link";

const Profile = (props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) {
      setUserId(session.user._id);
      setLoading(false);
    }
  }, [session]);

  // Employer Profile
  const [jobPostings, setJobPostings] = useState([]);
  useEffect(() => {
    if (!loading) {
      const fetchJobPostings = async () => {
        const response = await fetch("http://localhost:3000/api/jobs");
        const data = await response.json();
        console.log(data.jobs);
        if (data.jobs !== undefined) {
          console.log("userId", userId);
          const filteredData = data.jobs.filter(
            (job) => job.employer === userId
          );
          console.log(filteredData);
          setJobPostings(filteredData);
        }
      };
      fetchJobPostings();
    }
  }, [loading]);

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
    <>
      <Card width="w-3/4 lg:w-3/4">
        <div className="text-2xl font-bold text-russian_green">
          Welcome {session.user.fname}, you are logged in!
        </div>
        <div>
          First Name: {session.user.fname}
          <br />
          Last Name: {session.user.lname}
          <br />
          Email: {session.user.email}
          <br />
          Account Type: {session.user.accountType}
        </div>

        <button
          className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5"
          onClick={() => signOut()}
        >
          SignOut
        </button>
      </Card>

      {session.user.accountType === "employer" && (
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
              className="bg-slate-400 m-2 p-4 rounded-md"
              key={jobPosting._id}
            >
              <h2>Title: {jobPosting.title}</h2>
              <p> Description: {jobPosting.description}</p>
              <h2 className="font-bold">Applicants:</h2>
              {jobPosting.applicants && jobPosting.applicants.length === 0 && (
                <div className="text-xl font-bold text-russian_green">
                  No applications yet!
                </div>
              )}

              {jobPosting.applicants &&
                jobPosting.applicants.map((jobApplication) => (
                  <div>
                    <div className="" key={jobApplication}>
                      Student ID: {jobApplication}
                    </div>
                    <button className="bg-green-800 p-1 rounded-md mr-2 hover:outline outline-2">
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
      )}

      {session.user.accountType === "student" && (
        <Card width="w-3/4 lg:w-3/4">
          <div className="text-2xl font-bold text-russian_green">
            Current Job Applications:
          </div>
          {session.user.jobApplications.length === 0 && (
            <div className="text-xl font-bold text-russian_green">
              You have no job applications!
            </div>
          )}
          {session.user.jobApplications.map((job) => (
            <div className="text-2xl font-bold text-russian_green">
              {job.title}
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
      )}

      {session.user.accountType === "admin" && (
        <Card width="w-3/4 lg:w-3/4">
          <div className="text-2xl font-bold text-russian_green">
            You are an admin!
          </div>
          <div className="text-2xl font-bold text-russian_green">
            <Link href="/admin">
              <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5">
                Go to admin dashboard
              </button>
            </Link>
          </div>
        </Card>
      )}
    </>
  );
};

export default Profile;
