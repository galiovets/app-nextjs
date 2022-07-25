import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";

export default async function profileData(req, res) {
  if (req.method === "GET") {
    await dbConnect();

    const users = await User.find({});

    if (!users) {
      return;
    }

    res.status(200).json({
      users,
    });
  }
}
