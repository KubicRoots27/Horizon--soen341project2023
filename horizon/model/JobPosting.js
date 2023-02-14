import { Schema, model, models } from "mongoose";

const JobPostingSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
const JobPosting = mongoose.model('JobPosting', JobPostingSchema);

module.exports = JobPosting;