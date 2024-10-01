import React from "react";

import FollowCard from "./FollowCard";

interface Ifollow {
  _id: string;
  name: string;
  profilePhoto: string;
}

interface IfollowProps {
  followData: Ifollow[];
}

const Followers = ({ followData }: IfollowProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {followData?.map((data) => <FollowCard key={data._id} data={data} />)}
    </div>
  );
};

export default Followers;
