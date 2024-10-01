import ProfileBanner from "./_components/ProfileBanner";
import ProfileMenuTab from "./ProfileMenuTab";

import { getMyPosts } from "@/services/PostService";
import { getMyUserData } from "@/services/FollowService";



const MyProfile = async () => {

  const {data: userData}= await getMyUserData()
  const {data: myPostData}= await getMyPosts()
  


  return (
    <>
      <div>
        <ProfileBanner />

        {/* dropdown menu  */}
        <div className="max-w-7xl min-w-7xl -top-9 relative mx-auto">
          <div className=" ">
            <ProfileMenuTab postsData = {myPostData? myPostData :[]} userData={userData? userData:[]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
