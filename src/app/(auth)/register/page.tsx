"use client";
import React from "react";
import { motion } from "framer-motion";
import {Tabs, Tab, Card as NextUiCard, CardBody} from "@nextui-org/react";
import Link from "next/link";

import RegistrationForm from "../components/RegistrationForm";
const RegisterPage = () => {
  let tabs = [
    {
      id: "student",
      label: "Student",
      role: "student",
    },
    {
      id: "tutor",
      label: "Tutor",
      role: "tutor",
    },
  ];

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
            <div className=" text-center pb-10">
            <Link href={'/'}> <h2 className="text-3xl font-bold uppercase">ASBAR Academy</h2></Link>
            
            <h3>Registration Now</h3>
            </div>
        
          <Tabs fullWidth items={tabs} size="md">
            {(item) => (
              <Tab key={item.id} title={item.label}>
                <RegistrationForm role={item.role} />
              </Tab>
            )}
          </Tabs>
        </CardBody>
      </NextUiCard>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
