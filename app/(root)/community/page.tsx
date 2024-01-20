import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import React from "react";

const Community = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <LocalSearchBar
        route="/"
        iconPosition="left"
        imgSrc="/assets/icons/search.svg"
        placeholder="Search amazing minds here..."
        otherClasses="flex-1"
      />

      {/* <div className='mt-9'>
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div> */}
    </div>
  );
};

export default Community;
