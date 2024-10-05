import React, { ReactNode } from "react";

import NavbarNew from "@/components/shared/NavbarNew";




const Frontendlayout = async ({ children }: { children: ReactNode }) => {
  
  

  return (
    < >
   
      <NavbarNew/>
      {children}
    </>
  );
};

export default Frontendlayout;
