import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Bell, Search, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopBar: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 ${isMobile ? "h-top-bar-mobile" : "h-top-bar-desktop"}`}
      >
        <div className="flex items-center justify-between h-full px-4">
          {isMobile && (
            <button className="p-2">
              <Menu className="w-5 h-5 text-neutral-dark" />
            </button>
          )}

          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://raw.githubusercontent.com/lejm-consultoria/passa-a-bola/refs/heads/main/Assets/new-logo-no-background.png"
              alt="Passa a Bola Logo"
              className="h-8 w-auto"
            />
            {!isMobile && (
              <span className="text-lg font-bold text-neutral-dark">
                Passa a Bola
              </span>
            )}
          </Link>

          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 opacity-50">
              <AvatarFallback>
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 ${isMobile ? "h-top-bar-mobile" : "h-top-bar-desktop"}`}
    >
      <div className="flex items-center justify-between h-full px-4">
        {isMobile && (
          <button className="p-2">
            <Menu className="w-5 h-5 text-neutral-dark" />
          </button>
        )}

        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://raw.githubusercontent.com/lejm-consultoria/passa-a-bola/refs/heads/main/Assets/new-logo-no-background.png"
            alt="Passa a Bola Logo"
            className="h-8 w-auto"
          />
          {!isMobile && (
            <span className="text-lg font-bold text-neutral-dark">
              Passa a Bola
            </span>
          )}
        </Link>

        <div className="flex items-center gap-3">
          {!isMobile && (
            <>
              <div className="text-base text-neutral-dark">Hello, User!</div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-neutral-dark" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Search className="w-5 h-5 text-neutral-dark" />
              </button>
            </>
          )}

          <button onClick={() => navigate("/settings")}>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
