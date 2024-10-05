export type SiteConfig = typeof siteConfig;
import { Bell, Contact, HelpCircleIcon, House, Info, LayoutGrid, Settings, User, Verified } from "lucide-react";
import { FaGlobe, FaAd, FaHeadset, FaCheckCircle, FaRocket, FaBook, FaUserCog, FaChartLine, FaHandsHelping, FaLock, FaCalendarAlt, FaNetworkWired, FaShieldAlt, FaUsers, FaStar } from 'react-icons/fa';

import NotificationModal from "@/components/modal/NotificationModal"
import MenuCard from "@/components/shared/MenuCard";
export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",

  navMenuCardItems: [
    {
      label: "Profile",
      icon: <User size={20}/>,
      href: "/profile",
    },
    {
      label: "About",
      icon: <Info size={20} />,
      href: "/profile",
    },
    {
      label: "Contact us",
      icon: <Contact size={20} />,
      href: "/profile",
    },
    {
      label: "Profile Verify",
      icon: <Verified size={20} />,
      href: "/profile/verfication",
    },
    {
      label: "Setting",
      icon: <Settings size={20} />,
      href: "/profile-verfication",
    },
    {
      label: "Help",
      icon: <HelpCircleIcon size={20} />,
      href: "/profile-verfication",
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
      label: "Settings",
      href: "/settings",
    },
     
  ],




 features : [
    {
      icon: <FaGlobe size={24} />,
      title: 'Exclusive Travel Guides',
      description: 'Unlock comprehensive travel guides curated by experts for unforgettable journeys.',
    },
    {
      icon: <FaAd size={24} />,
      title: 'Ad-Free Experience',
      description: 'Enjoy seamless navigation without any interruptions from ads.',
    },
    {
      icon: <FaHeadset size={24} />,
      title: 'Priority Customer Support',
      description: 'Get prompt assistance from our dedicated support team whenever you need it.',
    },
    {
      icon: <FaCheckCircle size={24} />,
      title: 'Verified User Badge',
      description: 'Stand out with a verified badge that showcases your credibility within the community.',
    },
    {
      icon: <FaRocket size={24} />,
      title: 'Early Access to New Features',
      description: 'Be the first to experience our latest tools and functionalities before anyone else.',
    },
    {
      icon: <FaBook size={24} />,
      title: 'Unlimited Access to Premium Content',
      description: 'Explore an extensive library of premium resources to enhance your travel planning.',
    },
    {
      icon: <FaUserCog size={24} />,
      title: 'Enhanced Profile Customization',
      description: 'Personalize your profile with advanced customization options to reflect your style.',
    },
    {
      icon: <FaChartLine size={24} />,
      title: 'Advanced Analytics and Reporting',
      description: 'Gain deeper insights into your travel patterns and optimize your future plans.',
    },
    {
      icon: <FaHandsHelping size={24} />,
      title: 'Community Access and Networking',
      description: 'Connect and network with like-minded travelers in exclusive premium community groups.',
    },
    {
      icon: <FaLock size={24} />,
      title: 'Secure and Private Data Management',
      description: 'Enjoy enhanced security features that protect your personal information and data.',
    },
    {
      icon: <FaCalendarAlt size={24} />,
      title: 'Monthly Webinars and Workshops',
      description: 'Learn from industry experts through exclusive webinars and interactive workshops.',
    },
    {
      icon: <FaNetworkWired size={24} />,
      title: 'Access to Beta Programs',
      description: 'Participate in beta programs and contribute to the development of future features.',
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: 'Personal Travel Concierge',
      description: 'Receive personalized travel assistance to help plan and organize your trips.',
    },
    {
      icon: <FaUsers size={24} />,
      title: 'Discounts on Partner Services',
      description: 'Save on travel-related services with exclusive discounts from our trusted partners.',
    },
    {
      icon: <FaStar size={24} />,
      title: 'Exclusive Member Events',
      description: 'Attend members-only events and enjoy unique experiences designed just for you.',
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
