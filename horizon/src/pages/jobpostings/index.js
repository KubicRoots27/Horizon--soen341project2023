import Link from "next/link";
import React, { useState, useEffect } from "react";

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const fetchJobPostings = async () => {
      const response = await fetch("http://localhost:3000/api/jobs");
      const data = await response.json();
      setJobPostings(data.jobs);
    };
    fetchJobPostings();
  }, []);

  return (
    <div>
      <div className="text-2xl font-bold text-russian_green">Job Postings:</div>
      {jobPostings.map((jobPosting) => (
        <div key={jobPosting._id}>
          <h2>{jobPosting.title}</h2>
          <p>{jobPosting.description}</p>
          <Link href={`/jobpostings/${jobPosting._id}`}>
            <button className="bg-slate-500 rounded hover:outline outline-2">
              View Job Posting
            </button>
          </Link>

          <br />
        </div>
      ))}
    </div>
  );
};

export default JobPostings;
