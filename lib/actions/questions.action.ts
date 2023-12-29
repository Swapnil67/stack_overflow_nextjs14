"use server";

import console from "console";
import Question from "../database/question.model";
import Tag from "../database/tag.model";
import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    await connectToDatabase();

    // const { title, content, tags, author, path } = params;
    const { title, content, tags, author } = params;
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
        { $setOnInsert: { name: tag, question: { $push: question._id } }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      // console.log("existingTag: ", existingTag);

      tagDocuments.push(existingTag._id);
    }

    // * Update the question
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // console.log("updateResp: ", updateResp);

  } catch (err) {
    console.log("Error ", err);
    
  }
}
