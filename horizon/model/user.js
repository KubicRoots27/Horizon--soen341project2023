import { Schema, model, models } from "mongoose";

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
  accountType: {
    type: String,
    required: true,
    enum: ["employer", "student", "admin"],
  },
  companyName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  jobOffers: {
    type: [Schema.Types.ObjectId],
    ref: "Job",
    default: [],
  },
  jobApplications: {
    type: [Schema.Types.ObjectId],
    ref: "Job",
    default: [],
  },
});

const Users = models.user || model("user", UserSchema);

export default Users;
