import ProfileBanner from "./_components/ProfileBanner";
import ProfileMenuTab from "./ProfileMenuTab";

import { getMyUserData } from "@/services/ProfileService";
import { getMyPosts } from "@/services/PostService";
import { Button } from "@nextui-org/button";




const MyProfile = async () => {

  const {data: userData}= await getMyUserData()
  const {data: myPostData}= await getMyPosts()
  
  const currentUserFollowsData = {
    followers: userData?.followers,
    follow: userData?.follow,
}

  return (
    <>
      <div>
      
       <ProfileBanner myProfileData = {userData} />
     
       
       
       
       
        {/* dropdown menu  */}
        <div className="max-w-7xl min-w-7xl -top-9 relative mx-auto">
          <div className=" ">
            <ProfileMenuTab 
            currentUserIsFollow={currentUserFollowsData ? currentUserFollowsData :[] } 
            postsData = {myPostData? myPostData :[]} 
            userData={userData? userData:[]} />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default MyProfile;
