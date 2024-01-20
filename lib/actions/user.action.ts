'use server'

import Question from "../database/question.model";
import User from "../database/user.model";
import { connectToDatabase } from "../mongoose"
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getUserByClerkId(params: any)  {
  try {
    await connectToDatabase();
    const { userId } = params;
    const userInfo = await User.findOne({ clerkId: userId });
    return userInfo;
  } catch (err) {
    console.log("Error getUserByClerkId ", err);
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    await connectToDatabase();
    const newUser = await User.create(userData)
    return newUser;
  } catch (err) {
    console.log("Error createUser ", err);
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    const { clerkId, updateData, path } = params;
    await connectToDatabase();
    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true
    });
    revalidatePath(path);
  } catch (err) {
    console.log("Error createUser ", err);
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    const { clerkId } = params;
    await connectToDatabase();

    const user = await User.findOneAndDelete({ clerkId });

    if(!user){
      throw new Error("User not found");
    }

    // * Delete user from database
    // * and questions, answwers, comments ets.

    // * Get the user question ids
    // const userQuestionIds = await Question.find({ author: user._id }).distinct('_id');

    // * Delete user questions
    await Question.deleteMany({ author: user._id });

    // TODO: delete user answers, omments etc

    const deleteUser = await User.findByIdAndDelete(user._id);
    return deleteUser;
  } catch (err) {
    console.log("Error createUser ", err);
  }
}