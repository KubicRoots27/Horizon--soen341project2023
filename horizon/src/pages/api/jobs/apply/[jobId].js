import connectDB from "database/conn";
import Jobs from "model/job";

export default async function handler(req, res) {
  // connectDB("Users").catch((error) => res.json({ error: error.message }));

  if (req.method === "POST") {
    const { jobId } = req.query;

    let { student } = req.body;

    try {
      const job = await Jobs.findById(jobId);
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
      if (job.applicants.includes(student)) {
        return res.status(400).json({ error: "Already applied" });
      }
      job.applicants.push(student);
      await job.save();
      return res.status(200).json({ job });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    res.status(500).json({ error: "Only POST method accepted" });
  }
}
