import UserCard from "@/components/cards/UserCard";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import SelectFilters from "@/components/shared/select/SelectFilters";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import console from "console";
import Link from "next/link";
import React from "react";

const Community = async () => {
  
  const result = await getAllUsers({});
  // const result = { users: [] }
  console.log(result);
  

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
   

      <div className="mt-11 flex items-center justify-between">
        <LocalSearchBar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search amazing minds here..."
          otherClasses="flex-1"
        />
        <SelectFilters
          filters={UserFilters}
          placeholder="Select a Filter"
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className='mt-12 flex flex-wrap gap-4'>
        {
          result.users.length ? (
            result.users.map(user => (
              <UserCard user={user} key={user.name} />
            ))
          ) : (
            <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
              <p>
              No Users Yet
              </p>
              <Link href='/sign-up' className="mt-2 font-bold text-accent-blue">
                Join to be the first
              </Link>
            </div>
          )
        }
      </section>
    </div>
  );
};

export default Community;
