import { Schema, model } from "mongoose";

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  employer: {
    type: Schema.Types.ObjectId,
    ref: "User",
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

const Job = models.job || model("job", JobSchema);
export default Job;
