import connectDB from "database/conn";
import Jobs from "model/job";

function trimTrailingWhitespace(str) {
  return str.replace(/\s+$/, "");
}

export default async function handler(req, res) {
  // connectDB("Users").catch((error) => res.json({ error: error.message }));

  if (req.method === "POST") {
    // Empty body exception
    if (!req.body) {
      return res.status(400).json({ error: "No request body" });
    }

    // Destructure the request body
    let {
      title,
      description,
      location,
      videoId,
      salary,
      employerId,
      companyName,
    } = req.body;

    // Trim trailing whitespace
    title = trimTrailingWhitespace(title);
    description = trimTrailingWhitespace(description);
    location = trimTrailingWhitespace(location);
    videoId = trimTrailingWhitespace(videoId);
    salary = trimTrailingWhitespace(salary);
    employerId = trimTrailingWhitespace(employerId);
    companyName = trimTrailingWhitespace(companyName);

    // Create job and save to database
    Jobs.create(
      {
        title,
        description,
        location,
        videoId,
        salary,
        employerId,
        companyName,
      },
      function (err, data) {
        if (err) {
          console.log(err);
          return res.status(400).json({ error: err.message });
        }
        return res.status(200).json({ status: true, job: data });
      }
    );
  } else {
    res.status(500).json({ error: "Only Post method accepted" });
  }
}
