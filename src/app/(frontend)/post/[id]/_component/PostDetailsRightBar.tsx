"use client";
import PostActionDropDown from "@/components/cards/cardsComp/PostActionDropDown";
import DeletePostModal from "@/components/modal/DeletePostModal";
import EditPostModal from "@/components/modal/EditPostModal";
import { IPost } from "@/types";
import { Avatar, Tooltip } from "@nextui-org/react";
import { Globe, Verified, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const PostDetailsRightBar = ({ post }:{post:any}) => {
    const searchParams = useSearchParams(); 
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const [limitCon, setLimitContent] = useState(182);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpenModal,setIsOpen]= useState(false)
  const [isOpenDeleteModal,setIsDeleteOpen]= useState(false)

  const toggleContent = () => {
    if (isExpanded) {
      setLimitContent(182);
    } else {
      setLimitContent(post.postContent.length);
    }
    setIsExpanded(!isExpanded);
  };

  const handleBack =()=>{

   
    
    if (redirect) {
        router.push(redirect); 
      }else{
        router.back()
      }
  }

  return (
    <div>
      {/* {post} */}
      {/* post top  */}
      <div className="flex gap-3 items-center">
          <Link href={post.user ? `/profile/${post?.user?._id}` : "/login"}>
            <Avatar src={post?.user?.profilePhoto} />
          </Link>
          <div className="flex justify-between  w-full">
            <div className="flex  font-medium flex-col">
              <div className="flex items-center gap-4 ">
                {" "}
                <Link
                  className="flex gap-1 items-center"
                  href={post.user ? `/profile/${post?.user?._id}` : "/login"}
                >
                  {" "}
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
                {" "}
                <Globe size={11} /> published: {post?.createdAt?.slice(0, 10)} | {post?.createdAt?.slice(11,16)} {post?.createdAt?.slice(11,13) >= 12 ? "PM":"AM"}
              </small>
            </div>

            <div className="flex gap-4">
            <PostActionDropDown setIsDeleteOpen={setIsDeleteOpen} setIsModalOpen={setIsOpen} />

<button className="hover:bg-slate-700/45 p-2 rounded-full" onClick={handleBack} ><X/></button>
            </div>
          </div>
        </div>
     
    {/* post content section  */}
    <section className="py-4">
    <div
        dangerouslySetInnerHTML={{
          __html: isExpanded
            ? post.postContent
            : post.postContent.slice(0, limitCon),
        }}
      />
      {!isExpanded && "..."}
      <div className="flex justify-end">
        <button
          className="text-blue-400 hover:bg-slate-700/45 p-0.5 px-2 text-right rounded-2xl"
          onClick={toggleContent}
        >
          {post.postContent.length > 182 && (
            <>{isExpanded ? "see less" : "see more"}</>
          )}
        </button>
      </div>
    </section>
    {isOpenModal && <EditPostModal postDetails={post} setIsOpen={setIsOpen} />}
    {isOpenDeleteModal && <DeletePostModal postId={post._id} setIsOpen={setIsDeleteOpen} />}
    </div>
  );
};

export default PostDetailsRightBar;
