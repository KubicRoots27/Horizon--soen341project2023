import connectDB from "database/conn";
import Jobs from "model/job";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const jobs = await Jobs.find({});
      return res.status(200).json({ status: true, jobs });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
