// pages/api/jobpost.js
import mongoose from "mongoose";
import connectDB from "../../../../database/conn";
import JobPosting from "../../../../models/JobPosting";

export default async function handler(req, res) {
  connectDB("UsersData").catch((error) => res.json({ error: error.message }));

const handleJobPost = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET":
        // Fetch all job postings
        const jobPostings = await JobPosting.find({});
        return res.status(200).json({ "No such post found."});

      case "POST":
        // Create a new job posting
        const newJobPost = new JobPosting(req.body);
        await newJobPost.save();
        return res.status(201).json({ "Cannot post this job." });

      case "PUT":
        // Update an existing job posting
        const updatedJobPost = await JobPosting.findByIdAndUpdate(
          req.query.id,
          req.body,
          {
            new: true,
          }
        );
        return res.status(200).json({ "Cannot update post." });

      case "DELETE":
        // Delete a job posting
        const deletedJobPost = await JobPosting.findByIdAndDelete(
          req.query.id
        );
        return res.status(200).json({ "Cannot delete post." });

      default:
        return res.status(405).end();
    }
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
};

export default handleJobPost;

