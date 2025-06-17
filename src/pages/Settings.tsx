import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Edit,
  MapPin,
  Mail,
  Trophy,
  Target,
  Zap,
  Lock,
  Bell,
  LogOut,
  Camera,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // User profile data
  const [profileData, setProfileData] = useState({
    name: "Ana Clara",
    username: "@anaclara10",
    level: 4,
    bio: "Meio-campista. Apaixonada por futebol feminino. Feminista e sonhadora.",
    email: "ana@passabolagpt.com",
    location: "São Paulo, SP",
    avatar: "/placeholder.svg",
    coverImage: "/placeholder.svg",
  });

  // User statistics
  const userStats = [
    {
      label: "Partidas",
      value: 12,
      icon: Trophy,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: "Gols",
      value: 7,
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      label: "XP",
      value: 620,
      icon: Zap,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
    },
  ];

  // Account preferences
  const accountOptions = [
    {
      id: "password",
      label: "Alterar Senha",
      icon: Lock,
      action: () => console.log("Navigate to password change"),
    },
    {
      id: "notifications",
      label: "Notificações",
      icon: Bell,
      action: () => console.log("Navigate to notifications"),
    },
    {
      id: "logout",
      label: "Sair da Conta",
      icon: LogOut,
      action: () => navigate("/login"),
      danger: true,
    },
  ];

  const handleEditProfile = (formData: FormData) => {
    const newData = {
      name: formData.get("name") as string,
      bio: formData.get("bio") as string,
      location: formData.get("location") as string,
      // In a real app, you'd handle file upload for avatar
    };

    setProfileData((prev) => ({
      ...prev,
      ...newData,
    }));

    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section A - Profile Header */}
      <div className="relative">
        {/* Cover Image */}
        <div
          className="h-48 md:h-64 bg-gradient-to-r from-brand-primary to-brand-secondary bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 51, 168, 0.3), rgba(255, 128, 194, 0.3)), url(${profileData.coverImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Profile Content Container */}
        <div className="container mx-auto px-4 relative">
          {/* Avatar positioned to overlap cover */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-20">
            <div className="flex flex-col md:flex-row md:items-end md:gap-6">
              {/* Avatar */}
              <div className="relative mx-auto md:mx-0 mb-4 md:mb-0">
                <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-lg">
                  <AvatarImage src={profileData.avatar} />
                  <AvatarFallback className="text-2xl md:text-3xl font-bold bg-brand-primary text-white">
                    {profileData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <Camera className="w-4 h-4 text-neutral-dark" />
                </button>
              </div>

              {/* Name and Info */}
              <div className="text-center md:text-left mb-6 md:mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-1">
                  {profileData.name}
                </h1>
                <p className="text-lg text-neutral-light mb-2">
                  {profileData.username}
                </p>
                <Badge
                  variant="secondary"
                  className="bg-brand-primary/10 text-brand-primary font-semibold"
                >
                  Nível {profileData.level}
                </Badge>
              </div>
            </div>

            {/* Edit Profile Button */}
            <div className="flex justify-center md:justify-end mb-6 md:mb-4">
              <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                    style={{ width: "120px", height: "36px" }}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editar Perfil
                  </Button>
                </DialogTrigger>

                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Editar Perfil</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      handleEditProfile(formData);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        defaultValue={profileData.name}
                        className="mt-1"
                        autoFocus
                      />
                    </div>

                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        defaultValue={profileData.bio}
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="location">Localização</Label>
                      <Input
                        id="location"
                        name="location"
                        defaultValue={profileData.location}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="avatar">Foto do Perfil</Label>
                      <Input
                        id="avatar"
                        name="avatar"
                        type="file"
                        accept="image/*"
                        className="mt-1"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="submit" className="flex-1 btn-primary">
                        Salvar Alterações
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsEditModalOpen(false)}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Section B - Bio & Info */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-neutral-dark mb-4">
                  Sobre
                </h2>
                <p className="text-base text-neutral-dark mb-6 leading-relaxed">
                  {profileData.bio}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-neutral-light" />
                    <span className="text-base text-neutral-dark">
                      {profileData.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-neutral-light" />
                    <span className="text-base text-neutral-dark">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section C - Quick Statistics */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-neutral-dark mb-6">
                  Estatísticas
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {userStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div
                          className={`w-12 h-12 ${stat.bgColor} ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-bold text-neutral-dark mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-neutral-light">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div>
            {/* Section D - Account Preferences */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-neutral-dark mb-6">
                  Preferências da Conta
                </h2>
                <div className="space-y-3">
                  {accountOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={option.action}
                        className={`w-full p-4 rounded-lg border transition-all duration-200 hover:shadow-md hover:border-brand-secondary text-left group ${
                          option.danger
                            ? "bg-red-50 border-red-200 hover:border-red-300"
                            : "bg-gray-50 border-gray-200"
                        }`}
                        aria-label={option.label}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg ${
                                option.danger
                                  ? "bg-red-100 text-red-600"
                                  : "bg-white text-neutral-dark"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <span
                              className={`font-medium ${
                                option.danger
                                  ? "text-red-600"
                                  : "text-neutral-dark"
                              }`}
                            >
                              {option.label}
                            </span>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                              option.danger
                                ? "text-red-400"
                                : "text-neutral-light"
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
