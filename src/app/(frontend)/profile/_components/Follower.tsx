import React from "react";

import FollowCard from "./FollowCard";
import { getCurrentUser } from "@/services/AuthService";
import { getMyUserData } from "@/services/ProfileService";

interface Ifollow {
  _id: string;
  name: string;
  profilePhoto: string;
}

interface IfollowProps {
  followData: Ifollow[];
  currentUserFollower:Ifollow[]
}

const Followers =  ({ followData,currentUserFollower }: IfollowProps) => {
 
  
 
  
  return (
  
    <>
      <p className="mb-10">Total Followers: {followData.length}</p>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {followData?.map((data) => {
          // Check if the current user follows  user
          const isFollower = currentUserFollower?.some(
            (follower) => follower._id === data._id
          );

          return (
            <FollowCard 
              key={data._id}
              data={data} 
              isFollower={isFollower} 
            />
          );
        })}
      </div>
    </>
  );
};

export default Followers;
