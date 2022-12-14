import type { NextApiRequest, NextApiResponse } from "next";
import { usersData } from "../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data: usersData });
}
