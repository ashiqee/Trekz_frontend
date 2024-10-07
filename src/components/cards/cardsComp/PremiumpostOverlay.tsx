import { Avatar, Tooltip } from '@nextui-org/react';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PremiumPostOverLay = ({image}:{image:string}) => {

  
  
    return (
        <div   className={` mt-2 gap-1.5 relative   grid grid-cols-1   `}
      >
        <div className='relative'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias animi, error veniam impedit dolor, rem porro numquam nostrum perferendis odio deleniti omnis magnam fuga itaque velit qui at nemo?</p>
        <Image
              alt={`image-`}
              className={` max-h-[400px] relative z-10 rounded-md w-full object-cover`}
              height={500}
              src={image}
              width={500}
            />
 <div  className="py-2 flex  gap-1.5">
              <Avatar size="sm" src={"#"} />
              <div className="flex items-center gap-2">
                <div>
                  <div className="bg-slate-400/45 w-fit px-2 rounded-xl">
                    <p className="text-[11px] font-normal">{"cmnt"} </p>
                    <p className="text-[12px] font-medium">{"commentText"}</p>
                  </div>
                  <span className="text-[8px] ml-1 text-gray-400">
                    asad
                  </span>
                </div>
                {/* commnet action  */}

                
              </div>
        </div>

        <div className='absolute top-0 h-full w-full z-30 rounded-xl p-5 flex flex-col justify-center items-center  bg-slate-800/95 '>
       <Link className='flex flex-col justify-center items-center' href={"/profile/verfication"}>
       <ShieldCheck size={60} />
        <Tooltip content={"To see verify your profile"}>
        <h3 className='text-4xl'>Premium Content</h3>
        </Tooltip>
       </Link>
        </div>
            </div>
        </div>
    );
};

export default PremiumPostOverLay;