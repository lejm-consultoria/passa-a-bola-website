import React from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import Sidebar from "./Sidebar";
import BottomTabs from "./BottomTabs";
import TopBar from "./TopBar";

interface NavigationProps {
  children: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const location = useLocation();

  // Hide navigation on login page
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      <TopBar />

      <div className="flex">
        {!isMobile && <Sidebar />}

        <main
          className={`flex-1 ${!isMobile ? "ml-64" : ""} pt-top-bar-desktop md:pt-top-bar-desktop pb-20 md:pb-0`}
        >
          {children}
        </main>
      </div>

      {isMobile && <BottomTabs />}
    </div>
  );
};

export default Navigation;
