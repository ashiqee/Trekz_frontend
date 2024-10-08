
import React from "react";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { Bell, House, LayoutGrid } from "lucide-react";

import NotificationModal from "../modal/NotificationModal";

import MenuCard from "./MenuCard";

const Menubar = () => {

 const  navItems= [
    {
      label: "Home",
      icon: <House size={20}/>,
      href: "/",
    },
    {
      label: "Menu",
      icon: <LayoutGrid size={20} />,
      modal:<><MenuCard icon={<LayoutGrid size={20}/>}/></>
    },
    {
      label: "Notification",
      icon: <Bell />,
      modal: <><NotificationModal icon={<Bell size={20} />}/></>,
    },
    
  ]


  return (
    <ul className="hidden lg:flex gap-4  justify-start ">

      {navItems?.map((item, i) => (
        <li
          key={i}
          className="bg-slate-800/40 hover:bg-primary-300 dark:hover:bg-slate-50/40 p-1 px-2.5 rounded-full"
        >
          <Tooltip content={item.label} placement="bottom">
            {item?.modal ? (
              <>
                        {item?.modal}
              </>
              // <><div>{item.modal}</div></>
            ) : (
              <Link
                className="data-[active=true]:text-primary data-[active=true]:font-medium  "
                href={item.href}
              >
                <p className="pt-1.5">{item.icon}</p>
              </Link>
            )}
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};

export default Menubar;
