import connectDB from "database/conn";
import Jobs from "model/job";

export default async function handler(req, res) {
  // connectDB("Users").catch((error) => res.json({ error: error.message }));

  if (req.method === "PUT") {
    // Empty body exception
    if (!req.body) {
      return res.status(400).json({ error: "No request body" });
    }

    // Destructure the request body
    let { id, title, description, location, salary, employer } = req.body;

    // Find job by ID and update fields
    Jobs.findByIdAndUpdate(
      id,
      {
        title,
        description,
        location,
        salary,
        employer,
      },
      { new: true },
      function (err, data) {
        if (err) {
          return res.status(400).json({ error: err.message });
        }
        return res.status(200).json({ status: true, job: data });
      }
    );
  } else {
    res.status(500).json({ error: "Only Put method accepted" });
  }
}
