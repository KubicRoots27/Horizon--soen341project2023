import connectDB from "database/conn";
import Jobs from "model/job";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    // Extract job ID from URL
    const jobId = req.query.id;

    // Delete job from database
    Jobs.findByIdAndDelete(jobId, function (err, data) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(200).json({ status: true, job: data });
    });
  } else {
    res.status(500).json({ error: "Only Delete method accepted" });
  }
}
