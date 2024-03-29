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

      // Destructure the request body
      let { fname, lname, email, accountType, companyName, password } = req.body;

      // Check duplicate user
      const checkexisting = await Users.findOne({ email: req.body.email });
      if (checkexisting) {
        return res.status(400).json({ error: "Email already exists" });
      }

      // Create user, hash password, and save to database
      Users.create(
        {
          fname,
          lname,
          email,
          accountType,
          companyName,
          password: await hash(password, 12),
        },
        function (err, data) {
          if (err) {
            return res.status(400).json({ error: err.message });
          }
          return res.status(200).json({ status: true, user: data });
        }
      );
    } else {
      res.status(500).json({ error: "Only Post method accepted" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  } 
}
