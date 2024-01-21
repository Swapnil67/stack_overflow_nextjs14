"use server"

import Tag from "../database/tag.model";
import User from "../database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    await connectToDatabase();
    const { userId } = params;

    const userInfo = await User.findById(userId);
    if(!userInfo) throw new Error("User not found");

    // * Find interations for the user and group by tags...
    // * Interaction Database

    return [{ _id: 1, name: 'tag1' }, { _id: 2, name: 'tag2' }, { _id: 3, name: 'tag3' }];
  } catch (err) {
    console.log("Error getTopInteractedTags ", err);
    throw err;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    await connectToDatabase();
    const tags = await Tag.find({});
    return { tags };
  } catch (err) {
    console.log("Error getAllTags ", err);
    throw err;
  }
}