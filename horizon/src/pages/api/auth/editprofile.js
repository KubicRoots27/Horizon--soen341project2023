import connectDB from "../../../../database/conn";
import Users from "../../../../model/user";
import { hash } from "bcryptjs";
import mongoose from "mongoose";

export default async function handler(req, res) {
  connectDB("Users").catch((error) => res.json({ error: error.message }));

  try {
    if (req.method === "POST") {
      // Empty body exception
      if (!req.body) {
        return res.status(400).json({ error: "No request body" });
      }

      // Destructure request body
      let { fname, lname, email, password, originalEmail } = req.body;

      // Check duplicate user
      if (email !== originalEmail) {
        const checkexisting = await Users.findOne({ email: req.body.email });
        if (checkexisting) {
          return res.status(400).json({ error: "Email already exists" });
        }
      }

      const tochange = await Users.findOne({ email: originalEmail });
      if (tochange) {
        tochange.fname = fname;
        tochange.lname = lname;
        tochange.email = email;
        tochange.password = await hash(password, 12);
        tochange.save();
        return res.status(200).json({ status: true, user: tochange });
      } else {
        return res.status(400).json({ error: "User not found" });
      }
    } else {
      res.status(500).json({ error: "Only Post method accepted" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
