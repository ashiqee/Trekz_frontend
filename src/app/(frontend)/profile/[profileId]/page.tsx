import React from 'react';

import ProfileBanner from '../_components/ProfileBanner';
import ProfileMenuTab from '../ProfileMenuTab';
import UserProfileBanner from './UserProfileBanner';
import { getOtherUserData } from '@/services/ProfileService';


const UserProfilePage = async ({params}) => {
    
    const userId = params.profileId
    const {data:userData}= await getOtherUserData(userId)

    const {getUser,userPosts}=userData;
  
    
    
    return (
        <><div>
           <UserProfileBanner userDetails={getUser} />

{/* dropdown menu  */}
<div className="max-w-7xl min-w-7xl -top-9 relative mx-auto">
  <div className=" ">
    <ProfileMenuTab postsData = {userPosts} userData={getUser} />
  </div>
</div>
</div>
        </>
    );
};

export default UserProfilePage;