import React from 'react';
import {Avatar} from "@nextui-org/react";
import { Ellipsis, Globe,  } from 'lucide-react';
import PostActionDropDown from './cardsComp/PostActionDropDown';


const PostCard = () => {
    return (
        <div className='p-4 bg-sky-900/25 dark:bg-slate-800/45 rounded-md'>
            <div className='px-5'>
            <div className="flex gap-3 items-center">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
   <div className='flex justify-between  w-full'>
   <p className='flex flex-col'> {"Ashik Mahmud"}
   <small className='text-[10px] flex items-center gap-1 text-slate-300/75'> <Globe size={11}/> published: {"12:20pm"}</small>
   </p>
   
 <PostActionDropDown/>
   </div>
      
    </div>

            </div>
        </div>
    );
};

export default PostCard;