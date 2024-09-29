import React, { ReactNode } from "react";

import { Navbar } from "@/components/shared/navbar";

const Frontendlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div >
      <Navbar />
      {children}
    </div>
  );
};

export default Frontendlayout;
