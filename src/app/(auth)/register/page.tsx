"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card as NextUiCard, CardBody} from "@nextui-org/react";
import Link from "next/link";

import RegistrationForm from "../components/RegistrationForm";


const RegisterPage = () => {
  

  return (
 

<div className="relative h-screen w-full overflow-hidden">
  {/* Background video  */}
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/video/bg_2_video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <motion.div animate={{ y: [-200, 100, 0] }} className="relative z-10  items-center h-full flex justify-center">
      <NextUiCard
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 "
        shadow="md"
      >

        <CardBody className="p-10 min-w-[40vw] px-20 2xl:px-40">
            <div className=" text-center pb-5">
            <Link href={'/'}> <h2 className="text-3xl font-bold uppercase">Trekz</h2></Link>
            <small>Travel trips & Destination guides</small>
            
            <h3 className="text-xl mt-2">Registration Now</h3>
            </div>
          

          <RegistrationForm  />
        </CardBody>
      </NextUiCard>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
