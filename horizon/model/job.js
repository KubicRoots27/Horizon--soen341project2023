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
  videoId: {
    type: String,
    default: null,
  },
  salary: {
    type: Number,
    required: true,
  },
  employerId: {
    type: String,
    required: true,
  },
  companyName: {
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
  status: {
    type: String,
    required: true,
    enum: ["Open", "Closed"],
    default: "Open",
  },
  chosenApplicant: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
});

const Jobs = models.job || model("job", JobSchema);

export default Jobs;
