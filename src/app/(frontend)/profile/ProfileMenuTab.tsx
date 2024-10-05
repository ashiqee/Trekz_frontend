"use client";
import React, { useState } from "react";

import Timeline from "./_components/Timeline";
import Follow from "./_components/Follow";
import Followers from "./_components/Follower";
import AboutMe from "./_components/AboutMe";
import { Verified } from "lucide-react";
import { Tooltip } from "@nextui-org/react";

const ProfileMenuTab = ({ userData ,postsData,currentUserIsFollow }: any) => {
  const [isActiveTab, setActiveTab] = useState(0);

  

  const tabDatas = [
    {
      tabTitle: "Timeline",

      tabComponent: (
        <>
          <Timeline datas={postsData} />
        </>
      ),
    },
    {
      tabTitle: "Followers",
      count:userData?.followers?.length,
      tabComponent: <><Followers currentUserFollower={currentUserIsFollow?.follow}
       followData={userData?.followers} /></>,
    },
    {
      tabTitle: "Follow",
      count:userData?.follow?.length,
      tabComponent: (
        <>
          <Follow 
          currentUserFollower={currentUserIsFollow?.follow}
          followData={userData?.follow} />
        </>
      ),
    },
    {
      tabTitle: "About",
      tabComponent: (
        <>
         <AboutMe  about={userData}/>
        </>
      ),
    },
  ];

  const details = tabDatas[isActiveTab];

  return (
    <div className=" mx-auto ">
      <ul className="flex gap-2 md:gap-10        ">
        {tabDatas?.map((data, i) => (
          <li
            key={i}
            className={`${
              isActiveTab === i &&
              "bg-gradient-to-b dark:from-slate-900/45 dark:to-slate-900 bg-sky-900/75 rounded-t-[20px] text-white  "
            } 
               md:font-bold text-center text-[13px] md:text-sm  p-1.5 px-3 md:px-10 `}
          >
            <button onClick={() => setActiveTab(i)}>{data.tabTitle}</button>
           {data.count>0 && <span className="bg-slate-700/75 p-0.5 rounded-full px-1.5 relative bottom-0 md:bottom-2 text-[10px]">{ data.count}</span> } 
          </li>
        ))}
      </ul>

      <main className="md:flex min-w-7xl my-12 gap-6 mx-4 md:mx-0  justify-between">
        <div className="2xl:min-w-[920px] w-full">{details.tabComponent}</div>

        {/* new user tab  */}
        <div className="min-w-80 h-fit p-4 hidden md:block bg-sky-900/25 dark:bg-slate-800/45 rounded-md">
        <div className='space-y-3 text-sm'>
                 <h3 className="text-xl font-md">Intro</h3>
                 <p>Name: {userData?.name}</p>
                 <p>Email: {userData?.email}</p>
                 <p>Mobile: {userData?.mobileNumber}</p>
                 <p>Role: {userData?.role}</p>
                 <p className="flex gap-1 items-center">Verification Status: {userData?.isVerified  ?
                  <Tooltip content="Verified">
                  
                    <span className="text-blue-500 flex items-center gap-1">Verified<Verified size={24}  /></span></Tooltip>
                 :
                 
                 "Not Verify"} </p>
             </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileMenuTab;
