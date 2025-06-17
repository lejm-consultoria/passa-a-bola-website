import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TopBar from "@/components/layout/TopBar";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isFormValid = formData.email && formData.password;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar />

      <div className="pt-top-bar-desktop md:pt-top-bar-desktop">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Column - Hero Section & Form */}
            <div className="order-2 md:order-1">
              {/* Hero Section */}
              <div className="mb-8 md:mb-12">
                <h1 className="text-h1 mb-4">Welcome to Passa a Bola</h1>
                <h2 className="text-h2 text-neutral-dark">
                  Your gateway to women's football.
                </h2>
              </div>

              {/* Mobile Illustration */}
              <div className="md:hidden mb-8 flex justify-center">
                <div className="w-4/5 aspect-square bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-brand-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-20 bg-brand-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-body font-medium text-neutral-dark"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-light" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field pl-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-body font-medium text-neutral-dark"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-light" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="input-field pl-12"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className="btn-primary w-full"
                >
                  Sign In
                </Button>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 text-center sm:text-left">
                  <Link
                    to="/forgot-password"
                    className="text-caption text-neutral-light hover:text-neutral-dark transition-colors"
                  >
                    Forgot Password?
                  </Link>
                  <Link
                    to="/signup"
                    className="text-caption text-brand-primary hover:text-brand-hover transition-colors font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>

            {/* Right Column - Desktop Illustration */}
            <div className="order-1 md:order-2 hidden md:block">
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-no-repeat bg-contain opacity-20"></div>

                {/* Female player silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Player silhouette representation */}
                    <div className="w-48 h-64 bg-gradient-to-b from-brand-primary/40 to-brand-primary/60 rounded-t-full"></div>

                    {/* Soccer ball */}
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-white border-4 border-brand-primary rounded-full shadow-lg">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-white"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-brand-secondary rounded-full opacity-60"></div>
                <div className="absolute bottom-16 left-12 w-6 h-6 bg-brand-primary rounded-full opacity-40"></div>
                <div className="absolute top-20 right-12 w-3 h-3 bg-brand-secondary rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-footer text-neutral-footer">
              © 2025 Passa a Bola. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;
