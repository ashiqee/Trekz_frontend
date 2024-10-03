"use client";
import { Button } from "@nextui-org/button";
import { Star, UserMinus, UserMinusIcon } from "lucide-react";
import React from "react";
import { Spinner } from "@nextui-org/react";

import { useAddFollow, useUnFollow } from "@/hooks/follow.hoot";


const FollowAction = ({
  userDetails,
  userId,
 
}: {
  userDetails: any;
  userId?: string;
  
}) => {
  
  const { mutate: addFollow, isPending: isAddLoading } = useAddFollow();
  const { mutate: unFollow, isPending: isUnfollowpending } = useUnFollow();


  const isFollowing = userDetails?.followers?.some(
    (follower: any) => follower._id === userId
  );


  const handleAddFollow = () => {
    addFollow(userDetails._id);
  };

  const handleUnFollow = () => {
    
    unFollow(userDetails._id);
  };

  return (
    <div>
      {!isFollowing ? (
        <Button className=" md:size-8 size-4" color="primary" onPress={handleAddFollow}>
          {isAddLoading ? (
            <><Spinner className="size-3" />Following...</>
          ) : (
            <>
              <Star className="text-white" size={16} /> Follow
            </>
          )}
        </Button>
      ) : (
        <Button color="warning" size="sm" onPress={handleUnFollow}>
          {isUnfollowpending ? (
          <><Spinner className="size-2"  />Unfollowing...</>
          ) : (
            <>
              <UserMinus size={13} /> unfollow
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default FollowAction;
