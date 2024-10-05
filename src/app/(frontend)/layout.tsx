import React, { ReactNode } from "react";

import { Navbar } from "@/components/shared/navbar";
import NavbarNew from "@/components/shared/NavbarNew";




const Frontendlayout = async ({ children }: { children: ReactNode }) => {
  
  

  return (
    < >
      {/* <Navbar/> */}
      <NavbarNew/>
      {children}
    </>
  );
};

export default Frontendlayout;
