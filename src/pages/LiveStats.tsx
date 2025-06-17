import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  Target,
  Users,
  Percent,
  TrendingUp,
  Medal,
  Star,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlayerStats {
  matches: number;
  goals: number;
  assists: number;
  passAccuracy: number;
  minutesPlayed: number;
}

interface MonthlyPerformance {
  month: string;
  averageScore: number;
}

interface RankingPlayer {
  position: number;
  name: string;
  username: string;
  avatar: string;
  goals: number;
  assists: number;
  level: number;
  isCurrentUser?: boolean;
}

const LiveStats: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("mes");

  // User's personal statistics
  const userStats: PlayerStats = {
    matches: 12,
    goals: 7,
    assists: 5,
    passAccuracy: 85,
    minutesPlayed: 980,
  };

  // Monthly performance data
  const monthlyPerformance: MonthlyPerformance[] = [
    { month: "Jan", averageScore: 7.2 },
    { month: "Fev", averageScore: 7.8 },
    { month: "Mar", averageScore: 8.1 },
    { month: "Abr", averageScore: 7.9 },
    { month: "Mai", averageScore: 8.5 },
    { month: "Jun", averageScore: 8.4 },
  ];

  // Team comparison data
  const teamStats = {
    team: {
      passAccuracy: 78,
      goalsPerMatch: 1.2,
      assists: 3.4,
      possession: 62,
    },
    user: {
      passAccuracy: 85,
      goalsPerMatch: 1.6,
      assists: 4.2,
      possession: 68,
    },
  };

  // Ranking data
  const rankingData: RankingPlayer[] = [
    {
      position: 1,
      name: "Mariana Souza",
      username: "@mariana_souza",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
      goals: 14,
      assists: 6,
      level: 6,
    },
    {
      position: 2,
      name: "Ana Clara",
      username: "@anaclara10",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c87c?w=100&h=100&fit=crop&crop=face",
      goals: 12,
      assists: 8,
      level: 5,
      isCurrentUser: true,
    },
    {
      position: 3,
      name: "Beatriz Lima",
      username: "@beatriz_lima",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      goals: 11,
      assists: 7,
      level: 5,
    },
    {
      position: 4,
      name: "Sofia Costa",
      username: "@sofia_costa",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      goals: 10,
      assists: 9,
      level: 4,
    },
    {
      position: 5,
      name: "Júlia Santos",
      username: "@julia_santos",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      goals: 9,
      assists: 5,
      level: 4,
    },
  ];

  // Personal stats cards data
  const personalStatsCards = [
    {
      title: "Partidas Jogadas",
      value: userStats.matches,
      icon: Trophy,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Gols",
      value: userStats.goals,
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Assistências",
      value: userStats.assists,
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Precisão de Passe",
      value: `${userStats.passAccuracy}%`,
      icon: Percent,
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Section A - Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-primary mb-2">
            Estatísticas
          </h1>
          <h2 className="text-lg font-semibold text-neutral-light">
            Acompanhe seu desempenho em campo e compare com outras jogadoras.
          </h2>
        </div>

        {/* Period Filter (Desktop only) */}
        <div className="hidden md:block">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semana">Semana</SelectItem>
              <SelectItem value="mes">Mês</SelectItem>
              <SelectItem value="temporada">Temporada</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Section B - Tabs */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger
            value="personal"
            className="data-[state=active]:bg-brand-primary data-[state=active]:text-white"
          >
            Minhas Estatísticas
          </TabsTrigger>
          <TabsTrigger
            value="team"
            className="data-[state=active]:bg-brand-primary data-[state=active]:text-white"
          >
            Estatísticas do Time
          </TabsTrigger>
          <TabsTrigger
            value="ranking"
            className="data-[state=active]:bg-brand-primary data-[state=active]:text-white"
          >
            Ranking Geral
          </TabsTrigger>
        </TabsList>

        {/* Section C.1 - Personal Statistics */}
        <TabsContent value="personal" className="space-y-8">
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {personalStatsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow duration-200"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 ${stat.bgColor} ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-dark mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-light">
                      {stat.title}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Monthly Performance Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-primary" />
                Desempenho Mensal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-neutral-light mb-6">
                  Pontuação Média por Partida
                </div>

                {/* Simple Bar Chart */}
                <div className="grid grid-cols-6 gap-4 items-end h-64">
                  {monthlyPerformance.map((month, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-full bg-brand-primary rounded-t-lg transition-all duration-500 hover:bg-brand-hover cursor-pointer relative group"
                        style={{
                          height: `${(month.averageScore / 10) * 100}%`,
                          minHeight: "20px",
                        }}
                      >
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {month.averageScore}
                        </div>
                      </div>
                      <div className="text-sm text-neutral-dark mt-2 font-medium">
                        {month.month}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Legend */}
                <div className="text-xs text-neutral-light text-center mt-4">
                  Passe o mouse sobre as barras para ver valores exatos
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Section C.2 - Team Statistics */}
        <TabsContent value="team" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Comparative Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Comparação com o Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* Pass Accuracy */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-dark">
                        Precisão de Passe
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-neutral-light">
                          Média do Time
                        </span>
                        <span className="text-xs font-medium">
                          {teamStats.team.passAccuracy}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gray-400 h-2 rounded-full"
                          style={{
                            width: `${teamStats.team.passAccuracy}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-brand-primary font-medium">
                          Sua média
                        </span>
                        <span className="text-xs font-medium text-brand-primary">
                          {teamStats.user.passAccuracy}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-brand-primary h-2 rounded-full"
                          style={{
                            width: `${teamStats.user.passAccuracy}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Goals per Match */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-dark">
                        Gols por Jogo
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-neutral-light">
                          Média do Time
                        </span>
                        <span className="text-xs font-medium">
                          {teamStats.team.goalsPerMatch}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gray-400 h-2 rounded-full"
                          style={{
                            width: `${(teamStats.team.goalsPerMatch / 3) * 100}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-brand-primary font-medium">
                          Sua média
                        </span>
                        <span className="text-xs font-medium text-brand-primary">
                          {teamStats.user.goalsPerMatch}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-brand-primary h-2 rounded-full"
                          style={{
                            width: `${(teamStats.user.goalsPerMatch / 3) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Radar Chart Representation */}
            <Card>
              <CardHeader>
                <CardTitle>Desempenho Técnico</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-neutral-light mb-4">
                    Avaliação por área técnica
                  </div>

                  {/* Simplified radar chart representation */}
                  <div className="space-y-4">
                    {[
                      { area: "Finalização", value: 85 },
                      { area: "Passe", value: 90 },
                      { area: "Drible", value: 75 },
                      { area: "Velocidade", value: 80 },
                      { area: "Defesa", value: 70 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-neutral-dark">
                            {skill.area}
                          </span>
                          <span className="text-sm font-medium text-brand-primary">
                            {skill.value}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-brand-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Section C.3 - General Ranking */}
        <TabsContent value="ranking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Medal className="w-5 h-5 text-brand-primary" />
                Ranking Geral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 py-3 px-4 bg-gray-50 rounded-lg text-sm font-medium text-neutral-dark">
                  <div className="col-span-1">Pos.</div>
                  <div className="col-span-5">Jogadora</div>
                  <div className="col-span-2 text-center">Gols</div>
                  <div className="col-span-2 text-center">Assist.</div>
                  <div className="col-span-2 text-center">Nível</div>
                </div>

                {/* Table Rows */}
                {rankingData.map((player) => (
                  <div
                    key={player.position}
                    className={`grid grid-cols-12 gap-4 py-4 px-4 rounded-lg transition-all duration-200 hover:shadow-md ${
                      player.isCurrentUser
                        ? "bg-brand-primary/5 border-l-4 border-brand-primary"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Position */}
                    <div className="col-span-1 flex items-center">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                          player.position === 1
                            ? "bg-yellow-100 text-yellow-600"
                            : player.position === 2
                              ? "bg-gray-100 text-gray-600"
                              : player.position === 3
                                ? "bg-amber-100 text-amber-600"
                                : "bg-gray-50 text-neutral-dark"
                        }`}
                      >
                        {player.position <= 3 ? (
                          <Medal className="w-4 h-4" />
                        ) : (
                          player.position
                        )}
                      </div>
                    </div>

                    {/* Player Info */}
                    <div className="col-span-5 flex items-center gap-3">
                      <Link
                        to={`/athlete/${player.username.slice(1)}`}
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback>
                            {player.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-neutral-dark flex items-center gap-2">
                            {player.name}
                            {player.isCurrentUser && (
                              <Badge
                                variant="secondary"
                                className="bg-brand-primary/10 text-brand-primary text-xs"
                              >
                                Você
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-neutral-light">
                            {player.username}
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Goals */}
                    <div className="col-span-2 flex items-center justify-center">
                      <span className="font-semibold text-neutral-dark">
                        {player.goals}
                      </span>
                    </div>

                    {/* Assists */}
                    <div className="col-span-2 flex items-center justify-center">
                      <span className="font-semibold text-neutral-dark">
                        {player.assists}
                      </span>
                    </div>

                    {/* Level */}
                    <div className="col-span-2 flex items-center justify-center">
                      <Badge
                        variant="outline"
                        className="border-brand-primary/20 text-brand-primary"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        {player.level}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Footer */}
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                >
                  Ver Ranking Completo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LiveStats;
