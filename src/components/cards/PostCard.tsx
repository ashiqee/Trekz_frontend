'use client'
import React from "react";
import { Avatar, Divider,  Input } from "@nextui-org/react";
import { Globe, ThumbsDown, ThumbsUp } from "lucide-react";

import PostActionDropDown from "./cardsComp/PostActionDropDown";
import ImageGallery from "./cardsComp/ImagesGallery";
import VideoCard from "./cardsComp/VideoCard";
import ImageCard from "./cardsComp/ImageCard";

const PostCard = () => {


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
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <div className="flex justify-between  w-full">
            <p className="flex  font-medium flex-col">
              {" "}
              {"Ashik Mahmud"}
              <small className="text-[10px] flex text-black items-center gap-1 dark:text-slate-300/75">
                {" "}
                <Globe size={11} /> published: {"12:20pm"}
              </small>
            </p>

            <PostActionDropDown />
          </div>
        </div>

        {/* post main body  */}
        <section className="space-y-2 py-2">
          {/* if text post available show  */}
          {/* todo condition  */}
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto
            at, reprehenderit totam rem sed dolorem eveniet minima magnam
            voluptate incidunt recusandae distinctio illum, unde consectetur
            delectus blanditiis consequuntur nisi.
          </p>
          {/* if image here show  */}
          <div>

{videos.length > 0 ? (
<VideoCard videos={videos} />

)
:  
<>
<ImageCard images={images} />
{/* <ImageGallery images={images} /> */}
</>
}
           
         
          </div>
          <div className="flex justify-between items-center py-2">
            <p className="flex items-center gap-4">
              <span className="flex gap-1">
                <ThumbsUp />
                {"10"}
              </span>
              <span className="flex gap-1">
                <ThumbsDown />
                {4}
              </span>
            </p>

            <p className="flex items-center">{22} comments</p>
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
