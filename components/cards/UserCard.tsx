import React from "react";
import Image from "next/image";
import Link from "next/link";
import RenderTag from "../shared/RenderTag/RenderTag";
import { getTopInteractedTags } from "@/lib/actions/tag.actions";
import { Badge } from "../ui/badge";

interface Props {
  user: {
    _id: string;
    name: string;
    clerkId: string;
    picture: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const { _id, name, picture } = user;

  const interactedtags = await getTopInteractedTags({ userId: _id });

  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-light100_darknone background-light900_dark200 text-light400_dark500  w-full rounded-[10px] p-[30px] max-xs:min-w-full xs:w-[260px] sm:px-11"
    >
      <div className="background-light900_dark200 light-border mx-auto flex flex-col items-center justify-center rounded-xl">
        <div>
          <Image
            width={100}
            height={100}
            src={picture}
            alt="user profile"
            className="rounded-[50px]"
          />
          <div className="mt-4 text-center">
            <h3 className="sm:h3-semibold base-semibold text-dark300_light900 line-clamp-1">
              {name}
            </h3>
            <p className="body-regular text-dark500_light500 mt-2">
              {user.username}
            </p>
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          {interactedtags && interactedtags.length > 0 ? (
            <div className="flex items-center gap-2">
              {interactedtags?.map((tag, i) => (
                <RenderTag key={user.name} name={tag.name} _id={tag._id} />
              ))}
            </div>
          ) : (
            <Badge>No Tags Yet</Badge>
          )}
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
