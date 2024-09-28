export type SiteConfig = typeof siteConfig;
import { Bell, House, LayoutGrid } from "lucide-react";
import NotificationModal from "@/components/modal/NotificationModal"
export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      icon: <House size={20}/>,
      href: "/",
    },
    {
      label: "Menu",
      icon: <LayoutGrid size={20} />,
      href: "/docs",
    },
    {
      label: "Notification",
      icon: <Bell />,
      modal: <><NotificationModal icon={<Bell size={20} />}/></>,
    },
    
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
