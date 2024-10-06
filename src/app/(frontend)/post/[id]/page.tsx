import React from 'react';
import ImageSlider from './_component/ImageSlider';
import { getAPostsDetails } from '@/services/PostService';
import PostDetailsRightBar from './_component/PostDetailsRightBar';
import CommentSection from './_component/CommentSection';

const PostDetails = async ({params}:{params:any}) => {

  
    
const {data:PostDetails} = await getAPostsDetails(params.id)



    return (
        <div className='md:flex px-4 py-4 md:gap-8 md:px-12 md:py-10'>
            
            <div className='max-w-7xl rounded-lg shadow-lg shadow-blue-700/25'>
                {/* images  */}
                <ImageSlider images ={PostDetails.images}/>
            </div>

            <div className='w-full bg-slate-700/15 p-6  rounded-lg shadow-lg shadow-blue-700/25'>
                <PostDetailsRightBar post={PostDetails}/>
                <CommentSection post={PostDetails}/>
            </div>
        </div>
    );
};

export default PostDetails;