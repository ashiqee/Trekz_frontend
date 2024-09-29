"use client";
import { Button, Image, Tooltip } from "@nextui-org/react";
import { Facebook, Share2, Star } from "lucide-react";
import React from "react";
import ProfileMenuTab from "./ProfileMenuTab";

const MyProfile = () => {
  return (
   <div>
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
          <div className="flex items-center gap-6">
            <Image
              className="md:w-40 md:h-40 w-24 shadow hover:shadow-lg shadow-primary-300 rounded-full"
              src="https://cdn.basedlabs.ai/c500fd1b-831b-4f17-8b75-37b4e9a68fca"
            />
            <div>
              <h3 className="text-xl md:text-3xl">{"Name Profile"}</h3>
              <p className="text-sm font-extralight">@{"userName"}</p>
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
      </div>

       

    </div>

     {/* dropdown menu  */}
<div className="max-w-7xl min-w-7xl -top-9 relative mx-auto">
<div className=" ">
     <ProfileMenuTab/>

    
     </div>
</div>
    
   </div>
  );
};

export default MyProfile;
