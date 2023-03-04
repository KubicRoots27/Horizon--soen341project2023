import { useSession } from "next-auth/react";

const JobPosting = ({ jobPosting }) => {
  const { data: session, status } = useSession();

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
      {session && session.user.accountType === "student" && (
        <button className="bg-slate-500 rounded hover:outline outline-2 p-2 mt-5"
        onClick={() => {
            const apply = async () => {
                const response = await fetch(`http://localhost:3000/api/jobs/apply/${jobPosting._id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        student: session.user._id,
                    }),
                });
                const data = await response.json();
                console.log(data);
            };
            apply();
        }}
        >
          Apply
        </button>
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
