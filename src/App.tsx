import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import LiveStats from "./pages/LiveStats";
import AthleteProfile from "./pages/AthleteProfile";
import Community from "./pages/Community";
import Fantasy from "./pages/Fantasy";
import Stories from "./pages/Stories";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stats" element={<LiveStats />} />
            <Route path="/stats/match/:id" element={<LiveStats />} />
            <Route path="/stats/live/:id" element={<LiveStats />} />
            <Route path="/athlete/:id" element={<AthleteProfile />} />
            <Route path="/community" element={<Community />} />
            <Route path="/fantasy" element={<Fantasy />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/settings" element={<Settings />} />
            {/* Placeholder routes for forgot password and signup */}
            <Route path="/forgot-password" element={<Login />} />
            <Route path="/signup" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Navigation>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
