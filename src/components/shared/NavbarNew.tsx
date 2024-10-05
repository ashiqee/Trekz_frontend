"use client"
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";

import Menubar from "./menubar";
import NavbarDropdown from "./NavbarDropDown";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  SearchIcon,
  Logo,
} from "@/components/icons";
import { useUser } from "@/context/user.provider";

const NavbarNew = () => {
    const {user} = useUser()
 

  
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
        
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

    return (
        <NextUINavbar className=" dark:bg-gradient-to-b from-slate-900/15 to-slate-900/70" maxWidth="full" position="sticky">
     
        <NavbarContent className="basis-1/5  sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo />
              <p className="font-bold text-2xl text-inherit">Trekz</p>
            </NextLink>
          </NavbarBrand>
  
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        </NavbarContent>
  
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem>
         {user?.email &&  <Menubar />}
  
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            {user?.email ? <><NavbarDropdown/></>:
            <><Link href="/login"><Button size="sm" variant="faded">Login</Button></Link></>
            }
            
          </NavbarItem>
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
  
         
        </NavbarContent>
  
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>
  
        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
               
              </NavbarMenuItem>
            ))}
          </div>
          <NavbarItem className="ml-4">
            {user ? <Button  color="danger">Logout</Button>:<Link href="'/login">Login</Link>}
          </NavbarItem>
        </NavbarMenu>
      </NextUINavbar>
    );
};

export default NavbarNew;