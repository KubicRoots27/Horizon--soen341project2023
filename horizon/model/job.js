import { Schema, model, models } from "mongoose";

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
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
  employer: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  applicants: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
});

const Jobs = models.job || model("job", JobSchema);

export default Jobs;
