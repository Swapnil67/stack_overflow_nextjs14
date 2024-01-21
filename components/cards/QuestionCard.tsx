import React from "react";
import RenderTag from "../shared/RenderTag/RenderTag";
import Link from "next/link";
import Metric from "../shared/Metric/Metric";
import { formatHugeNumber, getTimestamp } from "@/lib/utils";

interface QuestionProps {
  _id: number;
  tags: { _id: number; name: string }[];
  title: string;
  views: number;
  author: {
    _id: number;
    name: string;
    picture: string;
  };
  upvotes: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  tags,
  title,
  views,
  author,
  upvotes,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/questions/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2 ">
        {tags.map((tag, i) => {
          return <RenderTag key={tag._id} _id={tag._id} name={tag.name} />;
        })}
      </div>

      <div className="mt-6 flex w-full flex-wrap justify-between gap-3">
        <div>
          <Metric
            imgUrl={author.picture}
            alt="users"
            isAuthor
            value={author.name}
            title={`- asked ${getTimestamp(createdAt)}`}
            href={`/profile/${author._id}`}
            textStyles="body-medium text-dark400_light800"
          />
        </div>

        <div className="flex gap-2">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="upvotes"
            value={formatHugeNumber(upvotes)}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatHugeNumber(answers.length)}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatHugeNumber(views)}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

/*

     <div className="background-light800_darkgradient min-h-[137px] w-full px-[45px] py-9">
        <div className="flex flex-col gap-6">
          
          <div className="flex flex-col items-start gap-[14px]">
            <h3 className="h3-semibold text-dark200_light900">
              {title}
            </h3>
            <div className="flex w-full gap-4">
              {tags.map((tag, i) => {
                return (
                  <RenderTag
                    key={tag._id}
                    _id={tag._id}
                    name={tag.name}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
              <Image
                src="/assets/icons/chevron-right.svg"
                className="invert-colors"
                alt="right arrow"
                width={20}
                height={20}
              />
              <p className="body-medium text-dark400_light800">{author.name}</p>
              <p className="small-regular text-dark400_light800">
                • asked 2 mins ago
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center">
                <Image
                  src="/assets/icons/like.svg"
                  className="invert-colors"
                  alt="like"
                  width={16}
                  height={16}
                />
                <p className="small-regular text-dark400_light800">
                  <b>{upvotes}k</b> Votes
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/message.svg"
                  className="invert-colors"
                  alt="like"
                  width={16}
                  height={16}
                />
                <p className="small-regular text-dark400_light800">
                  Answers
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/icons/eye.svg"
                  className="invert-colors"
                  alt="like"
                  width={16}
                  height={16}
                />
                <p className="small-regular text-dark400_light800">
                  <b>{views}k</b> Views
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
