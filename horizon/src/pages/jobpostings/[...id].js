const JobPosting = ({ jobPosting }) => {
  return (
    <div>
      <h2>{jobPosting.title}</h2>
      <p>{jobPosting.description}</p>
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
