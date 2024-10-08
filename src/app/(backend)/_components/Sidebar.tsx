'use client'
import { useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import { FiUser, FiFileText, FiDollarSign, FiBarChart2, FiSettings, FiLogOut } from "react-icons/fi"; // Icons
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { logout } from "@/services/AuthService";
import { Avatar } from "@nextui-org/react";
import { useUser } from "@/context/user.provider";

const sidebarVariants = {
  open: { width: "250px", opacity: 1 },
  closed: { width: "80px", opacity: 0.8 },
};

const linkVariants = {
  hover: { scale: 1.05, x: 5, transition: { type: "spring", stiffness: 300 } },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const user =useUser()

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <motion.aside
      animate={isOpen ? "open" : "closed"}
      className="fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg z-50"
      initial={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <div className="p-4 flex items-center justify-between">
        <span className="text-xl font-bold">
          {isOpen ? "Admin Panel" : "AP"}
        </span>
        <button
          className="focus:outline-none text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? "<" : ">"}
        </button>
      </div>
      
      <nav className="mt-10 flex flex-col justify-between h-[85vh]">
        <ul>
          <MenuItem
            href="/admin/users"
            icon={<FiUser />}
            isOpen={isOpen}
            label="Manage Users"
            router={router}
          />
          <MenuItem
            href="/admin/content"
            icon={<FiFileText />}
            isOpen={isOpen}
            label="Manage Content"
            router={router}
          />
          <MenuItem
            href="/admin/payments"
            icon={<FiDollarSign />}
            isOpen={isOpen}
            label="Manage Payments"
            router={router}
          />
          <MenuItem
            href="/admin/analytics"
            icon={<FiBarChart2 />}
            isOpen={isOpen}
            label="Analytics"
            router={router}
          />
          <MenuItem
            href="/admin/settings"
            icon={<FiSettings />}
            isOpen={isOpen}
            label="Settings"
            router={router}
          />
         
        </ul>
        <div className="mx-4 flex flex-col items-center">
            <Avatar size="lg"  src={user.user?.profilePhoto}/>
           <Link href={`/profile`}> <p>{user.user?.name}</p></Link>
            <Link href={'/'}><h2 className="text-4xl font-extrabold text-center my-6">Trekz</h2></Link>
        <Button className="flex float-end w-full" onClick={()=>logout()} color="danger"> <FiLogOut />Logout</Button>
        </div>
      </nav>
    </motion.aside>
  );
};

type MenuItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  isOpen: boolean;
  router: any;
};

const MenuItem = ({ href, label, icon, isOpen, router }: MenuItemProps) => {
  return (
    <motion.li
      className={`mb-6 cursor-pointer flex items-center px-4 ${
        router.pathname === href ? "bg-gray-700" : ""
      }`}
      variants={linkVariants}
      whileHover="hover"
    >
      <Link passHref href={href}>
        <p className="flex items-center gap-3 w-full text-white">
          <span className="text-2xl">{icon}</span>
          {isOpen && <span className="text-base">{label}</span>}
        </p>
      </Link>
    </motion.li>
  );
};

export default Sidebar;
