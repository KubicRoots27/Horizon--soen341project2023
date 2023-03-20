import connectDB from "database/conn";
import Users from "model/user";

export default async function handler(req, res) {
  // connectDB("Users").catch((error) => res.json({ error: error.message }));

  if (req.method === "GET") {
    const { profileId } = req.query;

    try {
      const user = await Users.findById(profileId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    res.status(500).json({ error: "Only GET method accepted" });
  }
}
