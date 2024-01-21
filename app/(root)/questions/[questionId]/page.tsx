import Metric from "@/components/shared/Metric/Metric";
import { getQuestionById } from "@/lib/actions/questions.action";
import React from "react";

const page = async ({ params }: { params: { questionId: string } }) => {
  const result = await getQuestionById({ questionId: params.questionId });
  console.log("result : ", result);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <Metric
              isAuthor
              title="| JS Mastery"
              imgUrl="/assets/zoro-sleeping.jpg"
              alt="users"
              value="Swapnil"
              href={`/profile/q3eq3`}
              textStyles="body-medium text-dark400_light800"
            />
          </div>
          <div className="flex gap-2">
          <Metric
            alt="upvotes"
            title=" Votes"
            imgUrl="/assets/icons/upvote.svg"
            value={result.question.upvotes.length}
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            alt="upvotes"
            title=" Votes"
            imgUrl="/assets/icons/downvote.svg"
            value={result.question.downvotes.length}
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            title=""
            alt="star"
            imgUrl="/assets/icons/star.svg"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
        </div> 
        <h2 className="h2-bold text-dark100_light900">{result.question.title}</h2>
      </div>
    </>
  );
};

export default page;
