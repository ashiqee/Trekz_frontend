
'use client'
import { Suspense, } from "react";

import PostCard from "@/components/cards/PostCard";


const Timeline = ({datas}:{datas:any}) => {



    
    return (
        <div className="space-y-4  ">
          

         

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