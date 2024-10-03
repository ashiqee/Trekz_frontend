import React from 'react';

import ProfileMenuTab from '../ProfileMenuTab';

import UserProfileBanner from './UserProfileBanner';

import { getMyUserData, getOtherUserData } from '@/services/ProfileService';


const UserProfilePage = async ({params}:{params:any}) => {
    
    const userId = params.profileId
    const {data:userData}= await getOtherUserData(userId)
        const {getUser,userPosts}= userData;
         const {data: currentUserData}= await getMyUserData()
 
    
    const currentUserFollowsData = {
        followers: currentUserData?.followers,
        follow: currentUserData?.follow,
    }
    
    return (
        <><div>
           <UserProfileBanner userDetails={getUser} />

{/* dropdown menu  */}
<div className="max-w-7xl min-w-7xl -top-9 relative mx-auto">
  <div className=" ">
    <ProfileMenuTab 
    currentUserIsFollow={currentUserFollowsData ? currentUserFollowsData: []} 
    postsData = {userPosts ? userPosts : []} 
    userData={getUser} />
  </div>
</div>
</div>
        </>
    );
};

export default UserProfilePage;