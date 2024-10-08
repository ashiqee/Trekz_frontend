"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

import { siteConfig } from "@/config/site";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/user.provider";
import { LucideLayoutDashboard } from "lucide-react";

const MenuCard = ({ icon }: { icon: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const{ user}= useUser()

  return (
    <>
      <button className="mt-1.5" onMouseEnter={() => setOpen(!open)}>
        {icon}
      </button>
      {open && (
        <div
          className="absolute rounded-md shadow-blue-950/75 shadow-md z-10 top-16 right-16 w-fit h-fit bg-slate-100/75 dark:bg-slate-900"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="">
            <div className="grid justify-center items-center  p-4 grid-cols-3 gap-2">
            {user?.role === "ADMIN" && <>
              
              {siteConfig.navAdminMenuCardItems.map((item) => (
              <Link
                key={item.label}
                className="data-[active=true]:text-primary text-center flex flex-col items-center justify-center p-2 bg-slate-500/25 hover:bg-slate-500/40 rounded-lg data-[active=true]:font-medium mt-1.5"
                href={item.href}
              >
                {item.icon}
                <small className="text-[10px]">{item.label}</small>
              </Link>
            ))}
            </>}
              {siteConfig.navMenuCardItems.map((item) => (
                <Link
                  key={item.label}
                  className="data-[active=true]:text-primary text-center flex flex-col items-center justify-center p-2 bg-slate-500/25 hover:bg-slate-500/40 rounded-lg data-[active=true]:font-medium mt-1.5"
                  href={item.href}
                >
                  {item.icon}
                  <small className="text-[10px]">{item.label}</small>
                </Link>
              ))}
              
            </div>
            <div className=" p-4">
              <Button
                fullWidth
                className="hover:bg-slate-500/45"
                variant="faded"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCard;
