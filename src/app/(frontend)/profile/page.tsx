import { getMyUserData } from "@/services/FollowService";
import ProfileBanner from "./_components/ProfileBanner";
import ProfileMenuTab from "./ProfileMenuTab";



const MyProfile = async () => {

  const {data: userData}= await getMyUserData()
  


  return (
    <>
      <div>
        <ProfileBanner />

        {/* dropdown menu  */}
        <div className="max-w-7xl min-w-7xl -top-9 relative mx-auto">
          <div className=" ">
            <ProfileMenuTab userData={userData? userData:[]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
