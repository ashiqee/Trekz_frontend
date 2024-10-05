import React from 'react';
import ImageSlider from './_component/ImageSlider';
import { getAPostsDetails } from '@/services/PostService';

const PostDetails = async ({params}:{params:any}) => {

    console.log(params.id);
    
const data = await getAPostsDetails(params.id)

console.log(data);

    return (
        <div className='flex gap-6 px-28 py-10'>
            
            <div className='max-w-7xl'>
                {/* images  */}
                <ImageSlider/>
            </div>

            <div>
                Others 
            </div>
        </div>
    );
};

export default PostDetails;