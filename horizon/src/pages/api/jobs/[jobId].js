import connectDB from "database/conn";
import Jobs from "model/job";

export default async function handler(req, res) {
  // connectDB("Users").catch((error) => res.json({ error: error.message }));

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
  } else if (req.method === "DELETE") {
    const { jobId } = req.query;

    try {
      const job = await Jobs.findById(jobId);
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
      await job.remove();
      return res.status(200).json({ message: "Job deleted" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else if (req.method === "PATCH") {
    const { jobId } = req.query;

    try {
      const job = await Jobs.findById(jobId);
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }
      const { title, description, location, videoId, salary, status } =
        req.body;
      job.title = title;
      job.description = description;
      job.location = location;
      job.videoId = videoId;
      job.salary = salary;
      job.status = status;
      await job.save();
      return res.status(200).json({ message: "Job updated" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
