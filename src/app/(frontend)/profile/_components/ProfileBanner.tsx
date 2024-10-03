'use client'
import { Button, Image, Tooltip } from '@nextui-org/react';
import { Edit, Facebook, Share2, Star } from 'lucide-react';
import React from 'react';

import { useUser } from '@/context/user.provider';
import ProfileSkeleton from '@/components/skeletons/ProfileSkeleton';
import ProfileEditModal from './_modal/ProfileEditModal';
import ChangeProfileImage from './_modal/ChangeProfileImage';


const ProfileBanner = ({myProfileData}) => {
    const {user,isLoading}=useUser()
   
    

    return (
        <>
        {isLoading || !user?.email && <ProfileSkeleton/>}

      { !isLoading && 
        <div className="
        relative
        bg-[url('/images/railay-beach.webp')] bg-cover bg-center
        h-72 shadow-2xl shadow-gradient-to-b dark:from-slate-900/45 dark:to-slate-900 justify-center flex flex-col
        ">
          {/* profile cover  */}
          <div className="
          absolute inset-0
           dark:bg-gradient-to-r from-slate-900/15 to-slate-900/70 justify-center flex flex-col ">
            <section className="max-w-7xl flex justify-between items-center w-full px-4 md:mx-auto">
              <div className="flex relative items-center gap-6">
                <Image
                  className="md:w-40 md:h-40 w-24 shadow hover:shadow-lg shadow-primary-300 rounded-full"
                  src={myProfileData?.profilePhoto}
                />
                <ChangeProfileImage/>
                <div>
                  <h3 className="text-xl md:text-3xl">{myProfileData?.name}</h3>
                  <p className="text-sm font-extralight">@{myProfileData?.email?.split('@')[0]}</p>
                </div>
              </div>
     
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-2 md:gap-6 items-center">
                  <Tooltip content="Facebook">
                    <button className=" bg-slate-400/40 p-1.5  rounded-full ">
                      <Facebook
                        className="fill-primary-900  text-primary-900"
                        size={20}
                      />
                    </button>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <button className=" bg-slate-400/40 p-1.5  rounded-full ">
                      <Star
                        className="fill-primary-900  text-primary-900"
                        size={20}
                      />
                    </button>
                  </Tooltip>
                  <Tooltip content="Share">
                    <button className=" bg-slate-400/40 p-1.5  rounded-full ">
                      <Share2
                        className="fill-primary-900  text-primary-900"
                        size={20}
                      />
                    </button>
                  </Tooltip>
                </div>
     
                <Button size="sm">Invite Others</Button>
              </div>
            </section>
          <ProfileEditModal myProfileData = {myProfileData} />
          </div>

           
     
        </div>}
        </>  
    );
};

export default ProfileBanner;