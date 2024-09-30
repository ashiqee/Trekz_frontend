'use client'
import React from "react";
import { Avatar, Divider,  Input } from "@nextui-org/react";
import { Globe, ThumbsDown, ThumbsUp } from "lucide-react";

import PostActionDropDown from "./cardsComp/PostActionDropDown";
import VideoCard from "./cardsComp/VideoCard";
import ImageCard from "./cardsComp/ImageCard";

const PostCard = ({post}:{post:any}) => {


const images =[
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 
]

const videos: string | any[]= [ ]

  return (
    <div className="p-4 bg-sky-900/25 dark:bg-slate-800/45 rounded-md">
      <div className="px-5">
        {/* post top  */}
        <div className="flex gap-3 items-center">
          <Avatar src={post?.user?.profilePhoto} />
          <div className="flex justify-between  w-full">
            <p className="flex  font-medium flex-col">
              {" "}
              {post?.user?.name}
              <small className="text-[10px] flex text-black items-center gap-1 dark:text-slate-300/75">
                {" "}
                <Globe size={11} /> published: {post?.createdAt?.slice(0,10)}
              </small>
            </p>

            <PostActionDropDown />
          </div>
        </div>

        {/* post main body  */}
        <section className="space-y-2 py-2">
          {/* if text post available show  */}
          {/* todo condition  */}
          <div dangerouslySetInnerHTML={{ __html: post.postContent }} />
          {/* if image here show  */}
          <div>

{videos.length > 0 ? (
<VideoCard videos={post?.video} />

)
:  
<>
<ImageCard images={post?.images} />
{/* <ImageGallery images={images} /> */}
</>
}
           
         
          </div>
          <div className="flex justify-between items-center py-2">
            <p className="flex items-center gap-4">
              <span className="flex gap-1">
                <ThumbsUp />
                {post?.upVotes?.length}
              </span>
              <span className="flex gap-1">
                <ThumbsDown />
                {post?.downVotes?.length}
              </span>
            </p>

            <p className="flex items-center">{post?.comments?.length} comments</p>
          </div>
          {/* comment collection  */}
          <Divider />
          <div className="py-2 flex gap-1.5">
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <div className="bg-slate-400/45 w-fit px-2 rounded-xl">
              <p className="text-[11px]">{"Ashiqeee"}</p>
              <p className="text-[12px]">
                আপেল ফোন নাকি ভাইয়া.....😮😮😮😮, আজকাল চোখে ম্যালা কম দেহি..
              </p>
            </div>
          </div>
          <div className="py-2 flex gap-1.5">
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <div className="bg-slate-400/45 w-fit px-2 rounded-xl">
              <p className="text-[11px]">{"Ashiqeee"}</p>
              <p className="text-[12px]">
                আপেল ফোন নাকি ভাইয়া.....😮😮😮😮
              </p>
            </div>
          </div>
{/* comment input  */}
          <div className="flex gap-1.5">
          <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <Input placeholder="Comment as Ashiq" type="text"/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostCard;
