
'use client'
import { Suspense, useEffect, useState } from "react";

import PostCard from "@/components/cards/PostCard";
import CreateNewPostModal from "@/components/modal/CreatePostModal";
import Filtering from "@/components/modules/post-filtering/Filtering";



const Timeline = ({datas}:{datas:any}) => {



    const categories = Array.from(new Set(
        datas.filter((post: any) => post.category)
             .map((post: any) => post.category)
    ));
    
    return (
        <div className="space-y-4  ">
            <div className=" p-4 bg-sky-900/25   dark:bg-slate-800/45 rounded-md">
            <CreateNewPostModal  />

            </div>

            <div>
                <Filtering 
                categories={categories}
           
                
                />
            </div>

            <Suspense fallback={<div>Loading posts...</div>}>
                <div className="grid grid-cols-1 gap-4">
                    {datas?.map((item: any, i: number) => (
                        <PostCard key={i} post={item} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default Timeline;