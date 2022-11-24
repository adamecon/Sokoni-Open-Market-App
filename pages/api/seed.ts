import User from "../../models/user";
import data from "../../utils/data";
import db from "../../utils/database";

const handler = async (req: any, res: any) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: "seeding was successful!" });
};
export default handler;
