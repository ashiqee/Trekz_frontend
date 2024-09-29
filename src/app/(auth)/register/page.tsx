"use client";
import React from "react";
import { motion } from "framer-motion";
import {Tabs, Tab, Card as NextUiCard, CardBody} from "@nextui-org/react";
import Link from "next/link";

import RegistrationForm from "../components/RegistrationForm";
const RegisterPage = () => {
  

  return (
    <div>
                <motion.div
  animate={{ y: [-200, 100, 0] }}
>
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
