import { Schema, model, models } from "mongoose";

// Student applicants to jobs
const applicantsSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

// Job posting schema
const JobPostingSchema = new Schema({
  employerEmail: {
    type: String,
    required: true,
  },
  applicants: {
    type: [applicantsSchema],
    required: false,
  },
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

// User schema
const UserSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Users = models.user || model("user", UserSchema);
const JobPostings = models.jobPosting || model("jobPosting", JobPostingSchema);

export default { Users, JobPostings };
