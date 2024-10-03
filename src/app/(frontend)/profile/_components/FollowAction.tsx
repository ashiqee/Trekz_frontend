"use client";
import { Button } from "@nextui-org/button";
import { Star, UserMinusIcon, UserPlus } from "lucide-react";
import React from "react";

import { addFollowing, removeFollowing } from "@/services/FollowService";
import { toast } from "sonner";
import { useAddFollow, useUnFollow } from "@/hooks/follow.hoot";
import { Spinner } from "@nextui-org/react";

const FollowAction = ({
  userDetails,
  userId,
  isFollow,
}: {
  userDetails: any;
  userId?: string;
  isFollow?: boolean;
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
        <Button size="sm" color="primary" onPress={handleAddFollow}>
          {isAddLoading ? (
            <><Spinner className="size-2" />Following...</>
          ) : (
            <>
              <Star size={16} /> Follow
            </>
          )}
        </Button>
      ) : (
        <Button size="sm" color="secondary" onPress={handleUnFollow}>
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
