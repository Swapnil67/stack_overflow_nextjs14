'use server'

import User from "../database/user.model";
import { connectToDatabase } from "../mongoose"

export async function getUserByClerkId(params: any)  {
  try {
    await connectToDatabase();
    const { userId } = params;
    const userInfo = await User.findOne({ clerkId: userId });
    return userInfo;
  } catch (err) {
    console.log("Error ", err);
  }
}