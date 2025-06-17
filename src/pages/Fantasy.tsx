import React, { useState } from "react";
import {
  Trophy,
  Lock,
  CheckCircle,
  Clock,
  Star,
  Award,
  Target,
  Share2,
  MessageCircle,
  Heart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Mission {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: number;
  status: "completed" | "in-progress" | "locked";
  icon: React.ElementType;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  unlocked: boolean;
  rarity: "bronze" | "silver" | "gold" | "diamond";
}

const Fantasy: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  // User XP data
  const userLevel = 4;
  const currentXP = 620;
  const nextLevelXP = 1000;
  const xpProgress = (currentXP / nextLevelXP) * 100;

  // Sample missions data
  const missions: Mission[] = [
    {
      id: "1",
      title: "Compartilhe 3 posts",
      description:
        "Compartilhe posts sobre futebol feminino nas suas redes sociais",
      progress: 2,
      total: 3,
      reward: 20,
      status: "in-progress",
      icon: Share2,
    },
    {
      id: "2",
      title: "Comente 5 vezes",
      description: "Participe das discussões comentando em posts da comunidade",
      progress: 4,
      total: 5,
      reward: 15,
      status: "in-progress",
      icon: MessageCircle,
    },
    {
      id: "3",
      title: "Assista 3 partidas ao vivo",
      description: "Acompanhe partidas ao vivo através da plataforma",
      progress: 3,
      total: 3,
      reward: 50,
      status: "completed",
      icon: Trophy,
    },
    {
      id: "4",
      title: "Curta 10 posts",
      description: "Demonstre apoio curtindo conteúdos da comunidade",
      progress: 7,
      total: 10,
      reward: 10,
      status: "in-progress",
      icon: Heart,
    },
    {
      id: "5",
      title: "Complete seu perfil",
      description: "Adicione foto, bio e informações pessoais ao seu perfil",
      progress: 0,
      total: 1,
      reward: 25,
      status: "locked",
      icon: Target,
    },
    {
      id: "6",
      title: "Convide 3 amigas",
      description: "Convide suas amigas para se juntarem à comunidade",
      progress: 1,
      total: 3,
      reward: 75,
      status: "in-progress",
      icon: Star,
    },
  ];

  // Sample achievements data
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "Primeira Vitória",
      description: "Complete sua primeira missão",
      icon: Trophy,
      unlocked: true,
      rarity: "bronze",
    },
    {
      id: "2",
      title: "MVP do Jogo",
      description: "Seja a mais ativa da semana",
      icon: Star,
      unlocked: true,
      rarity: "gold",
    },
    {
      id: "3",
      title: "10 Gols",
      description: "Marque 10 gols em uma temporada",
      icon: Target,
      unlocked: false,
      rarity: "silver",
    },
    {
      id: "4",
      title: "Comunidade Ativa",
      description: "Faça 50 comentários",
      icon: MessageCircle,
      unlocked: true,
      rarity: "silver",
    },
    {
      id: "5",
      title: "Influenciadora",
      description: "Seus posts receberam 100 curtidas",
      icon: Heart,
      unlocked: false,
      rarity: "gold",
    },
    {
      id: "6",
      title: "Lenda",
      description: "Alcance o nível 10",
      icon: Award,
      unlocked: false,
      rarity: "diamond",
    },
  ];

  const getRarityColor = (rarity: Achievement["rarity"]) => {
    switch (rarity) {
      case "bronze":
        return "text-amber-600";
      case "silver":
        return "text-gray-500";
      case "gold":
        return "text-yellow-500";
      case "diamond":
        return "text-blue-500";
      default:
        return "text-gray-400";
    }
  };

  const getRarityBg = (rarity: Achievement["rarity"]) => {
    switch (rarity) {
      case "bronze":
        return "bg-amber-100";
      case "silver":
        return "bg-gray-100";
      case "gold":
        return "bg-yellow-100";
      case "diamond":
        return "bg-blue-100";
      default:
        return "bg-gray-50";
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Section A - Title & Subtitle */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-brand-primary mb-2">
          Gamificação
        </h1>
        <h2 className="text-lg font-semibold text-neutral-light">
          Suba de nível, conquiste badges e complete missões.
        </h2>
      </div>

      {/* Desktop Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Section B - XP Progress (Left Column on Desktop) */}
        <div className="lg:col-span-1">
          <Card className="p-8">
            <div className="flex flex-col items-center space-y-6">
              {/* Circular Progress Ring */}
              <div className="relative w-48 h-48">
                <svg
                  className="w-48 h-48 transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#f3f4f6"
                    strokeWidth="8"
                    fill="transparent"
                    className="opacity-30"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - xpProgress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FF33A8" />
                      <stop offset="100%" stopColor="#FF80C2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Text inside circle */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold text-brand-primary mb-1">
                    Nível {userLevel}
                  </div>
                  <div className="text-sm text-neutral-dark">
                    {currentXP} / {nextLevelXP} XP
                  </div>
                </div>
              </div>

              {/* Next Reward */}
              <div className="text-center">
                <p className="text-sm text-neutral-light">
                  Próxima recompensa:
                </p>
                <p className="text-base font-semibold text-neutral-dark">
                  Distintivo de Ouro
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Missions and Achievements */}
        <div className="lg:col-span-1 space-y-8">
          {/* Section C - Active Missions */}
          <div>
            <h3 className="text-xl font-bold text-neutral-dark mb-4">
              Missões Ativas
            </h3>
            <div className="grid gap-4">
              {missions.map((mission) => {
                const Icon = mission.icon;
                const isCompleted = mission.status === "completed";
                const isLocked = mission.status === "locked";

                return (
                  <Dialog key={mission.id}>
                    <DialogTrigger asChild>
                      <Card
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                          isCompleted
                            ? "bg-green-50 border-green-200"
                            : isLocked
                              ? "bg-gray-50 border-gray-200 opacity-60"
                              : "hover:border-brand-primary"
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-2 rounded-lg ${
                                  isCompleted
                                    ? "bg-green-100 text-green-600"
                                    : isLocked
                                      ? "bg-gray-100 text-gray-400"
                                      : "bg-brand-primary/10 text-brand-primary"
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle className="w-5 h-5" />
                                ) : isLocked ? (
                                  <Lock className="w-5 h-5" />
                                ) : (
                                  <Icon className="w-5 h-5" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-semibold text-neutral-dark">
                                  {mission.title}
                                </h4>
                                <p className="text-sm text-neutral-light">
                                  {mission.progress}/{mission.total} concluídas
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge
                                variant="secondary"
                                className="bg-brand-primary/10 text-brand-primary"
                              >
                                +{mission.reward} XP
                              </Badge>
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                isCompleted
                                  ? "bg-green-500"
                                  : "bg-brand-primary"
                              }`}
                              style={{
                                width: `${(mission.progress / mission.total) * 100}%`,
                              }}
                            />
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            disabled={isLocked}
                          >
                            {isCompleted
                              ? "Concluída"
                              : isLocked
                                ? "Bloqueada"
                                : "Ver detalhes"}
                          </Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>

                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-brand-primary" />
                          {mission.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-neutral-dark">
                          {mission.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-neutral-light">
                            Progresso: {mission.progress}/{mission.total}
                          </span>
                          <Badge className="bg-brand-primary">
                            +{mission.reward} XP
                          </Badge>
                        </div>
                        {!isCompleted && !isLocked && (
                          <Button className="w-full btn-primary">
                            Continuar Missão
                          </Button>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Section D - Achievement Gallery */}
      <div>
        <h3 className="text-xl font-bold text-neutral-dark mb-6">
          Galeria de Conquistas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <Dialog key={achievement.id}>
                <DialogTrigger asChild>
                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:scale-105 ${
                      achievement.unlocked
                        ? `${getRarityBg(achievement.rarity)} border-current ${getRarityColor(achievement.rarity)} shadow-md`
                        : "bg-gray-50 border-gray-200 opacity-50"
                    }`}
                    aria-label={
                      achievement.unlocked
                        ? achievement.description
                        : `Conquista bloqueada: ${achievement.title}`
                    }
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div
                        className={`p-3 rounded-full ${
                          achievement.unlocked
                            ? `${getRarityBg(achievement.rarity)} ${getRarityColor(achievement.rarity)}`
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {achievement.unlocked ? (
                          <Icon className="w-6 h-6" />
                        ) : (
                          <Lock className="w-6 h-6" />
                        )}
                      </div>
                      <h4
                        className={`text-xs font-semibold ${
                          achievement.unlocked
                            ? "text-neutral-dark"
                            : "text-gray-400"
                        }`}
                      >
                        {achievement.title}
                      </h4>
                    </div>

                    {achievement.unlocked && (
                      <div
                        className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getRarityColor(achievement.rarity)}`}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Icon
                        className={`w-6 h-6 ${getRarityColor(achievement.rarity)}`}
                      />
                      {achievement.title}
                      <Badge
                        variant="outline"
                        className={getRarityColor(achievement.rarity)}
                      >
                        {achievement.rarity}
                      </Badge>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-neutral-dark">
                      {achievement.description}
                    </p>
                    <div
                      className={`p-4 rounded-lg ${
                        achievement.unlocked
                          ? "bg-green-50 border border-green-200"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      <p
                        className={`text-center font-semibold ${
                          achievement.unlocked
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        {achievement.unlocked
                          ? "🎉 Conquista Desbloqueada!"
                          : "🔒 Conquista Bloqueada"}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fantasy;
