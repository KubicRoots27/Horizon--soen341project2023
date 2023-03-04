import connectDB from "database/conn";
import Jobs from "model/job";

export default async function handler(req, res) {
  connectDB("Jobs").catch((error) => res.json({ error: error.message }));

  if (req.method === "GET") {
    const { jobId } = req.query;

    try {
      const job = await Jobs.findById(jobId);
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
      return res.status(200).json({ job });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    res.status(500).json({ error: "Only GET method accepted" });
  }
}
