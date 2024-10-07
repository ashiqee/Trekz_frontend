'use client'
import CmntActionDropDown from '@/components/cards/cardsComp/CommentActDrop';
import TRForm from '@/components/forms/TRFrom';
import TRInput from '@/components/forms/TRInput';
import CommentSkeleton from '@/components/skeletons/CommentSkeleton';
import { useUser } from '@/context/user.provider';
import { useCreateComment, useDownvotePost, useUpvotePost } from '@/hooks/posts.hook';
import { Avatar, Divider } from '@nextui-org/react';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const CommentSection = ({post}:{post:any}) => {
    const { user } = useUser();
    const { reset } = useForm();
    const { mutate: handleUpvoteToDb, isPending, isSuccess } = useUpvotePost();
    const {
      mutate: handleCommentToDb,
      isPending: isComPending,
      isSuccess: isComSuccess,
    } = useCreateComment();
    const { mutate: handleDownvoteToDb } = useDownvotePost();

    const handleUpvote = () => {
        handleUpvoteToDb(post._id);
      };
      const handleDownvote = () => {
        handleDownvoteToDb(post._id);
      };
    
      const handleCommentSubmit = (data: FieldValues) => {
       
        const commentText = data.commnetText;
    
        const commentData = {
          commentText: commentText,
          postId: post._id,
        };
    
        handleCommentToDb(commentData);
        reset();
      };
    
    return (
        <div className='w-full '>
             <div className="flex justify-between items-center py-2">
            <div className="flex items-center my-3 gap-4">
              <button className="flex gap-1" onClick={handleUpvote}>
                <ThumbsUp />
                {post?.upVotes?.length}
              </button>
              <button className="flex gap-1" onClick={handleDownvote}>
                <ThumbsDown />
                {post?.downVotes?.length}
              </button>
            </div>

            <p className="flex items-center">
              {post?.comments?.length} comments
            </p>
          </div>
          {/* comment collection  */}
          <Divider />

          {post.comments?.map((cmt: any) => (
            <div key={cmt._id} className="my-4 flex  gap-1.5">
              <Avatar size="sm" src={cmt?.user?.profilePhoto} />
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-slate-400/45 w-fit px-2 rounded-xl">
                    <p className="text-[11px] font-normal">{cmt.user.name} </p>
                    <p className="text-[12px] font-medium">{cmt.commentText}</p>
                  </div>
                  <span className="text-[8px] ml-1 text-gray-400">
                    {cmt.createdAt.slice(11, 16)}
                  </span>
                </div>
                {/* commnet action  */}

                <CmntActionDropDown cmntId={cmt._id} />
              </div>
            </div>
          ))}

          {/* comment input  */}
          {isComPending && <CommentSkeleton />}
          <div className="flex w-full my-4  gap-1.5">
            <Avatar size="sm" src={user?.profilePhoto} />
            <div className="w-full">
              <TRForm onSubmit={handleCommentSubmit}>
                <TRInput name="commnetText" type="text" />
              </TRForm>
            </div>
          </div>
        </div>
    );
};

export default CommentSection;