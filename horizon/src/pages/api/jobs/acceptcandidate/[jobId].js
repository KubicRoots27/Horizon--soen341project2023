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

      if (job.chosenApplicant !== null) {
        return res.status(401).json({ error: "Already chosen" });
      }
    
      if (job.chosenApplicant === student) {
        return res.status(402).json({ error: "Already chosen" });
      }
      job.chosenApplicant = student;
      job.status = "Closed";

      await job.save();
      return res.status(200).json({ job });
    } catch (error) {
      return res.status(403).json({ error: error.message });
    }
  } else {
    res.status(500).json({ error: "Only POST method accepted" });
  }
}
