"use client";

import Header from "@/components/ui/Header";
import { usePathname } from "next/navigation";

const ContainerProvider = ({ children }) => {
  const path = usePathname();
  return (
    <>
      {path.includes("/rooms") && (
        <>
          <div className="Container">
            <Header />
          </div>
          {children}
        </>
      )}
      {!path.includes("/rooms") && (
        <>
          <div className="Container">
            <Header />
            {children}
          </div>
        </>
      )}
    </>
  );
};
export default ContainerProvider;
