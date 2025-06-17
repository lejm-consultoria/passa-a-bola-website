import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart3, Users, Trophy, User } from "lucide-react";

const navigationItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/stats", icon: BarChart3, label: "Stats" },
  { path: "/community", icon: Users, label: "Community" },
  { path: "/fantasy", icon: Trophy, label: "Fantasy" },
  { path: "/settings", icon: User, label: "Profile" },
];

const BottomTabs: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors duration-200 ${
                isActive ? "text-brand-primary" : "text-neutral-light"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={2} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabs;
