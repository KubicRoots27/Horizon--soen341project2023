// pages/api/jobpost.js
import mongoose from "mongoose";
import connectDB from "../../../../database/conn";
import JobPosting from "../../../../models/JobPosting";

const handleJobPost = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET":
        // Fetch all job postings
        const jobPostings = await JobPosting.find({});
        return res.status(200).json({ jobPostings });

      case "POST":
        // Create a new job posting
        const newJobPost = new JobPosting(req.body);
        await newJobPost.save();
        return res.status(201).json({ newJobPost });

      case "PUT":
        // Update an existing job posting
        const updatedJobPost = await JobPosting.findByIdAndUpdate(
          req.query.id,
          req.body,
          {
            new: true,
          }
        );
        return res.status(200).json({ updatedJobPost });

      case "DELETE":
        // Delete a job posting
        const deletedJobPost = await JobPosting.findByIdAndDelete(
          req.query.id
        );
        return res.status(200).json({ deletedJobPost });

      default:
        return res.status(405).end();
    }
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
};

export default handleJobPost;

