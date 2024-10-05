'use client'
import React, { useState } from 'react';

const PostDetailsRightBar = ({post}) => {
    const [limitCon, setLimitContent] = useState(100);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        if (isExpanded) {
            setLimitContent(100);
        } else {
            setLimitContent(post.postContent.length); 
        }
        setIsExpanded(!isExpanded);
    }

   
    return (
        <div>
            {/* {post} */}
            <h2>{post.user.name}</h2>

            <div 
                    dangerouslySetInnerHTML={{ 
                        __html: isExpanded ? post.postContent : post.postContent.slice(0, limitCon) + ' ...'
                    }} 
                />
            
<div className='flex justify-end'>
<button className='text-blue-400 hover:bg-slate-700/45 p-0.5 px-2 text-right rounded-2xl'  onClick={toggleContent}>
                {isExpanded ? 'see less' : 'see more'}
            </button>
</div>
            
        </div>
    );
};

export default PostDetailsRightBar;