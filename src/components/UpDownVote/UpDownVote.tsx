import { useAddUpVote, useDownVote } from '@/hooks/updownvote.hook';
import { downVotetodB, upVotetodB } from '@/services/PostService';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { revalidateTag } from 'next/cache';
import React from 'react';

const UpDownVote =  ({postId,upvote,downvote}:{postId:string,upvote:number,downvote:number}) => {
    const { mutate: handleUpvoteToDb, isPending: isUpvotePending } = useAddUpVote();
    const { mutate: handleDownvoteToDb, isPending: isDownvotePending } = useDownVote();


    const handleUpvote =  (postId:string) => {
          handleUpvoteToDb(postId);
         
      };

      
      const handleDownvote = (postId:string) => {
  
        handleDownvoteToDb(postId)
      };

    return (
        <div className="flex items-center gap-4">
                    <button className="flex gap-1" onClick={()=>handleUpvote(postId)} >
                      <ThumbsUp />
                     {upvote}
                    </button>
                    <button className="flex gap-1" onClick={()=>handleDownvote(postId)} >
                      <ThumbsDown />
                     {downvote}
                    </button>
                  </div>
    );
};

export default UpDownVote;