"use client";
import { NavbarItem } from "@nextui-org/navbar";
import React from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";

const Menubar = () => {
 ;

  return (
    <ul className="hidden lg:flex gap-4  justify-start ">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href} className="bg-slate-800/40 hover:bg-primary-300 dark:hover:bg-slate-50/40 p-1 px-2.5 rounded-full">
          <Tooltip content={item.label}  placement="bottom">
            {item.modal ? (
             
                <div>{item.modal}</div>
             
            ) : (
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium mt-1.5",
                )}
                color="foreground"
                href={item.href}
              >
                {item.icon}
              </NextLink>
            )}
          </Tooltip>
        </NavbarItem>
      ))}
    </ul>
  );
};

export default Menubar;
