"use client";
import React, { useState } from "react";

import Timeline from "./_components/Timeline";
import Follow from "./_components/Follow";
import Followers from "./_components/Follower";

const ProfileMenuTab = ({ userData }: any) => {
  const [isActiveTab, setActiveTab] = useState(0);

  const tabDatas = [
    {
      tabTitle: "Timeline",
      tabComponent: (
        <>
          <Timeline datas={[]} />
        </>
      ),
    },
    {
      tabTitle: "Followers",
      tabComponent: <><Followers followData={userData?.followers} /></>,
    },
    {
      tabTitle: "Follow",
      tabComponent: (
        <>
          <Follow followData={userData?.follow} />
        </>
      ),
    },
    {
      tabTitle: "About",
      tabComponent: (
        <>
          <p>Our customers love this product! See what they have to say:</p>
          <ul className="list-disc pl-5">
            <li>Fantastic quality and fast delivery! - Jane Doe</li>
            <li>Exceeded my expectations. Highly recommended! - John Smith</li>
          </ul>
          <p>
            Want to leave your own review?{" "}
            <a className="text-blue-500 underline" href="/reviews">
              Click here
            </a>{" "}
            to share your thoughts!
          </p>
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
               md:font-bold text-center  p-1.5 px-4 md:px-10 `}
          >
            <button onClick={() => setActiveTab(i)}>{data.tabTitle}</button>
          </li>
        ))}
      </ul>

      <main className="md:flex min-w-7xl my-12 gap-6 mx-4 md:mx-0  justify-between">
        <div className="2xl:min-w-[920px] w-full">{details.tabComponent}</div>

        {/* new user tab  */}
        <div className="min-w-80 p-4 hidden md:block bg-sky-900/25 dark:bg-slate-800/45 rounded-md">
          New user lists
        </div>
      </main>
    </div>
  );
};

export default ProfileMenuTab;
