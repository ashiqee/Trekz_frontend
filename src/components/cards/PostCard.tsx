"use client";
import React, { useState } from "react";
import { Avatar, Divider, Tooltip } from "@nextui-org/react";
import { Globe, Verified } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

import TRForm from "../forms/TRFrom";
import TRInput from "../forms/TRInput";
import CommentSkeleton from "../skeletons/CommentSkeleton";
import PostsSkeleton from "../skeletons/PostsSkeleton";
import EditPostModal from "../modal/EditPostModal";
import DeletePostModal from "../modal/DeletePostModal";
import UpDownVote from "../UpDownVote/UpDownVote";

import PostActionDropDown from "./cardsComp/PostActionDropDown";
import VideoCard from "./cardsComp/VideoCard";
import ImageCard from "./cardsComp/ImageCard";
import CmntActionDropDown from "./cardsComp/CommentActDrop";
import PremiumPostOverLay from "./cardsComp/PremiumpostOverlay";

import { useCreateComment } from "@/hooks/posts.hook";
import { useUser } from "@/context/user.provider";


const PostCard = ({ post }: { post: any }) => {
  const router = useRouter();
  const { reset } = useForm();
  
  
  const { mutate: handleCommentToDb, isPending: isComPending } = useCreateComment();

  const { user } = useUser();

 
  const [isOpenModal, setIsOpen] = useState(false);
  const [isOpenDeleteModal, setIsDeleteOpen] = useState(false);

 

  const handleCommentSubmit = (data: FieldValues) => {
    if (!user?.email) {
      router.push("/login");
    }
    const commentText = data.commnetText;

    const commentData = {
      commentText: commentText,
      postId: post._id,
    };

    handleCommentToDb(commentData);
    reset();
  };

  return (
    <>
      {!post && <PostsSkeleton />}

      {post && (
        <div className="md:p-4 bg-sky-900/25 dark:bg-slate-800/45 rounded-md">
          <div className="px-5">
            {/* Post top */}
            <div className="flex gap-3 items-center">
              <Link href={user ? `/profile/${post?.user?._id}` : "/login"}>
                <Avatar src={post?.user?.profilePhoto} />
              </Link>
              <div className="flex justify-between w-full">
                <div className="flex font-medium flex-col">
                  <div className="flex items-center gap-4 ">
                    <Link
                      className="flex gap-1 items-center"
                      href={user ? `/profile/${post?.user?._id}` : "/login"}
                    >
                      <p>{post?.user?.name}</p>
                      {post?.user?.isVerified && (
                        <Tooltip content="Verified">
                          <span className="text-blue-500">
                            <Verified size={14} />
                          </span>
                        </Tooltip>
                      )}
                    </Link>
                  </div>
                  <small className="text-[10px] flex text-black items-center gap-1 dark:text-slate-300/75">
                    <Globe size={11} /> published: {post?.createdAt?.slice(0, 10)} |{" "}
                    {post?.createdAt?.slice(11, 16)}{" "}
                    {post?.createdAt?.slice(11, 13) >= 12 ? "PM" : "AM"}
                  </small>
                </div>
                {user?._id === post.user._id && (
                  <PostActionDropDown setIsDeleteOpen={setIsDeleteOpen} setIsModalOpen={setIsOpen} />
                )}
              </div>
            </div>

            {/* Post main body */}
            {post.isPremium && !user?.isVerified ? (
              <PremiumPostOverLay image={post.images[0]} />
            ) : (
              <section className="space-y-2 py-2">
                <div dangerouslySetInnerHTML={{ __html: post.postContent }} />

                {/* Tags */}
                {post.tags && (
                  <div className="flex gap-2">
                    {post.tags.map((t: string, i: number) => (
                      <small key={i} className="bg-slate-700/45 p-0.5 px-2 rounded-md">
                        #{t}
                      </small>
                    ))}
                  </div>
                )}
                <div>
                  {post?.video?.length > 0 ? (
                    <VideoCard catergory={post?.category} video={post?.video} />
                  ) : (
                    <ImageCard catergory={post?.category} images={post?.images} postId={post._id} />
                  )}
                </div>
                <div className="flex justify-between items-center py-2">
                 <UpDownVote 
                 downvote={post?.downVotes?.length || 0}
                 postId={post._id} 
                 upvote={post?.upVotes?.length || 0}
                 
                 />
                  <p className="flex items-center">{post?.comments?.length} comments</p>
                </div>

                {/* Comment collection */}
                <Divider />
                {post.comments?.map((cmt: any) => (
                  <div key={cmt._id} className="py-2 flex gap-1.5">
                    <Avatar size="sm" src={cmt.user.profilePhoto} />
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="bg-slate-400/45 w-fit px-2 rounded-xl">
                          <p className="text-[11px] font-normal">{cmt.user.name}</p>
                          <p className="text-[12px] font-medium">{cmt.commentText}</p>
                        </div>
                        <span className="text-[8px] ml-1 text-gray-400">{cmt.createdAt.slice(11, 16)}</span>
                      </div>
                      <CmntActionDropDown cmntId={cmt._id} />
                    </div>
                  </div>
                ))}

                {/* Comment input */}
                {isComPending && <CommentSkeleton />}
                <div className="flex w-full gap-1.5">
                  <Avatar size="sm" src={user?.profilePhoto} />
                  <div className="w-full">
                    <TRForm onSubmit={handleCommentSubmit}>
                      <TRInput name="commnetText" type="text" />
                    </TRForm>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      )}

      {isOpenModal && <EditPostModal postDetails={post} setIsOpen={setIsOpen} />}
      {isOpenDeleteModal && <DeletePostModal postId={post._id} setIsOpen={setIsDeleteOpen} />}
    </>
  );
};

export default PostCard;
