"use server";

import console from "console";
import Question from "../database/question.model";
import Tag from "../database/tag.model";
import { connectToDatabase } from "../mongoose";
import { GetQuestionsParams, CreateQuestionParams } from "./shared.types";
import User from "../database/user.model";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    await connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (err) {
    console.log(err);
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    await connectToDatabase();
    
    const { title, content, tags, author, path } = params;
    const question = await Question.create({
      title,
      content,
      author,
    });

    // console.log("question: ", question);

    const tagDocuments = [];
    // * Create the tags or get them if they already exists
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        {
          $setOnInsert: { name: tag, question: { $push: question._id } },
          $push: { question: question._id },
        },
        { upsert: true, new: true }
      );

      // console.log("existingTag: ", existingTag);

      tagDocuments.push(existingTag._id);
    }

    // * Update the question
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    revalidatePath(path);

    // console.log("updateResp: ", updateResp);
  } catch (err) {
    console.log("Error ", err);
  }
}
