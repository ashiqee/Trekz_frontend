"use client";
import { Button } from "@nextui-org/button";
import { Star, UserMinusIcon } from "lucide-react";
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
  const isFollowing = userDetails?.followers?.some(
    (follower: any) => follower._id === userId
  );
  const { mutate: addFollow, isPending: isAddLoading } = useAddFollow();
  const { mutate: unFollow, isPending: isUnfollowpending } = useUnFollow();

  const handleAddFollow = () => {
    addFollow(userDetails._id);
  };

  const handleUnFollow = () => {
    unFollow(userDetails._id);
  };

  return (
    <div>
      {!isFollowing ? (
        <Button color="primary" size="sm" onPress={handleAddFollow}>
          {isAddLoading ? (
            <><Spinner className="size-2" />Following...</>
          ) : (
            <>
              <Star size={16} /> Follow
            </>
          )}
        </Button>
      ) : (
        <Button color="secondary" size="sm" onPress={handleUnFollow}>
          {isUnfollowpending ? (
          <><Spinner className="size-2"  />Unfollowing...</>
          ) : (
            <>
              <UserMinusIcon /> unfollow
            </>
          )}
        </Button>
      )}
    </div>
  );
};

export default FollowAction;
