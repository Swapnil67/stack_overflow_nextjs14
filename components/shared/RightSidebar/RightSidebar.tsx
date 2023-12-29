import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag/RenderTag";

const hotQuestions = [
  {
    _id: 1,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    _id: 2,
    title: "Is it only me or the font is bolder than necessary?",
  },
  {
    _id: 3,
    title: "Can I get the course for free?",
  },
  {
    _id: 4,
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: 5,
    title: "Async/Await Function Not Handling Errors Properly",
  },
];

const PopularTags = [
  {
    _id: 1,
    name: "nextjs",
    totalQuestions: 27,
  },
  {
    _id: 2,
    name: "test",
    totalQuestions: 18,
  },
  {
    _id: 3,
    name: "react",
    totalQuestions: 17,
  },
  {
    _id: 4,
    name: "css",
    totalQuestions: 12,
  },
  {
    _id: 5,
    name: "nodejs",
    totalQuestions: 10,
  },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 max-xl:hidden dark:shadow-none">
      <div className="flex flex-col">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {
            hotQuestions.map((question) => (
              <Link key={question._id} className="flex cursor-pointer items-center justify-between gap-7" href={`/questions/${question._id}`}>
                <p className="body-medium text-dark500_light700">{question.title}</p>
                <Image
                  src='/assets/icons/chevron-right.svg'
                  className="invert-colors"
                  alt="right arrow"
                  width={20}
                  height={20}
                />
              </Link>
            ))
          }
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {
            PopularTags.map((tag,i) => {
              return (
                <RenderTag key={tag._id} _id={tag._id} name={tag.name} totalQuestions={tag.totalQuestions} showCount />
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
