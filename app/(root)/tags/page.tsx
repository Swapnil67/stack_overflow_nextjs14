import TagCard from "@/components/cards/TagCard";
import NoResult from "@/components/shared/NoResult/NoResults";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import SelectFilters from "@/components/shared/select/SelectFilters";
import { TagFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tag.actions";
import React from "react";

const page = async () => {
  const result = await getAllTags({})
  console.log("Tags ", result);
  
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Tags</h1>

      <div className="mt-11 flex items-center justify-between">
        <LocalSearchBar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search by tag name..."
          otherClasses="flex-1"
        />
        <SelectFilters
          filters={TagFilters}
          placeholder="Select a Filter"
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.tags.length ? (
          result.tags.map((tag,i) => <TagCard key={i} tag={tag} />)
        ) : (
          <NoResult
            title="No tags found"
            description="It looks like there are no tags found."
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </section>
    </>
  );
};

export default page;
