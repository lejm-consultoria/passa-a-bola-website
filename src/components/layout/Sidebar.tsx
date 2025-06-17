import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart3, Users, Trophy, User } from "lucide-react";

const navigationItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/stats", icon: BarChart3, label: "Statistics" },
  { path: "/community", icon: Users, label: "Community" },
  { path: "/fantasy", icon: Trophy, label: "Gamification" },
  { path: "/settings", icon: User, label: "Profile" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-top-bar-desktop w-64 h-[calc(100vh-64px)] bg-white border-r border-gray-200 z-40">
      <nav className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-brand-primary text-white"
                      : "text-neutral-dark hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
