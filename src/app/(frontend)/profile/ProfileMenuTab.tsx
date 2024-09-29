"use client";
import React, { useState } from "react";
import Timeline from "./_components/Timeline";

const ProfileMenuTab = () => {
  const [isActiveTab, setActiveTab] = useState(0);

  const tabDatas = [
    {
      tabTitle: "Timeline",
      tabComponent: (
        <>
          <Timeline/>
        </>
      ),
    },
    {
      tabTitle: "Follewers",
      tabComponent: (
        <>
          <p>
            We want you to be completely satisfied with your purchase. If you
            are not happy, you can return or exchange your item within 30 days
            of receipt.
          </p>
          <ul className="list-disc pl-5">
            <li>Items must be unused and in their original condition.</li>
            <li>Refunds will be issued to the original payment method.</li>
            <li>Exchanges are processed upon receipt of the original item.</li>
          </ul>
          <p>
            For more details, please visit our{" "}
            <a className="text-blue-500 underline" href="/return-policy">
              Return Policy
            </a>{" "}
            page.
          </p>
        </>
      ),
    },
    {
      tabTitle: "Follow",
      tabComponent: (
        <>
          <p>
            We provide a 1-year warranty on all our products to ensure your
            satisfaction:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Warranty Period:</strong> 1 year from the date of purchase
            </li>
            <li>
              <strong>Coverage:</strong> Manufacturer defects and product
              malfunctions
            </li>
          </ul>
          <p>
            If you experience any issues, please contact our customer support
            for assistance with warranty claims.
          </p>
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
      <ul className="flex gap-10        ">
        {tabDatas?.map((data, i) => (
          <li
            key={i}
            className={`${isActiveTab === i && "bg-gradient-to-b dark:from-slate-900/45 dark:to-slate-900 bg-sky-900/75 rounded-t-[20px] text-white p-1.5 px-10 "}   mr-1 font-bold text-center  p-1.5 px-10 `}
          >
            <button onClick={() => setActiveTab(i)}>{data.tabTitle}</button>
          </li>
        ))}
      </ul>


<main className="flex min-w-7xl my-12 gap-6  justify-between">
    
<div className="2xl:min-w-[920px] p-4 bg-sky-900/25 dark:bg-slate-800/45 rounded-md">{details.tabComponent}</div>

{/* new user tab  */}
<div className="min-w-80 p-4 bg-sky-900/25 dark:bg-slate-800/45 rounded-md">
 New user lists
</div>
</main>
    </div>
  );
};

export default ProfileMenuTab;
