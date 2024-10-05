import React from 'react';
import ImageSlider from './_component/ImageSlider';
import { getAPostsDetails } from '@/services/PostService';
import PostDetailsRightBar from './_component/PostDetailsRightBar';

const PostDetails = async ({params}:{params:any}) => {

    console.log(params.id);
    
const {data:PostDetails} = await getAPostsDetails(params.id)



    return (
        <div className='md:flex px-4 py-4 md:gap-6 md:px-28 md:py-10'>
            
            <div className='max-w-7xl'>
                {/* images  */}
                <ImageSlider images ={PostDetails.images}/>
            </div>

            <div>
                <PostDetailsRightBar post={PostDetails}/>
            </div>
        </div>
    );
};

export default PostDetails;