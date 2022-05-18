import connectMongo from "../../../utils/connectMongo";
import { ObjectId } from "mongodb";
import User from "../../../models/userModel";
import { getSession } from "next-auth/react";

export default async function update(req, res) {
  try {
    const session = await getSession({ req });
    console.log(session);
    const { post_id, author, date, title, body } = req.body;
    await connectMongo();
    const user = await User.findByIdAndUpdate(
      { _id: ObjectId(session.id) },
      {
        $push: {
          posts: {
            post_id: ObjectId(post_id),
            author: author,
            date: date,
            title: title,
            body: body,
          },
        },
      }
    );
    return res.json({ user });
  } catch (error) {
    return res.status(404).json({ error: true });
  }
}
