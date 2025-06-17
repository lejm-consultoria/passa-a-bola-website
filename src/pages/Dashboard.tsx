import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Play, Calendar, Clock, Goal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Dashboard: React.FC = () => {
  // Mock data for the dashboard
  const featuredArticles = [
    {
      id: 1,
      title: "Brazil Women's Team Advances to Final",
      byline: "Maria Santos • 2 hours ago",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Rising Star: Ana Silva's Journey",
      byline: "Carlos Mendes • 5 hours ago",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Championship Preview: What to Expect",
      byline: "Lucia Oliveira • 1 day ago",
      image: "/placeholder.svg",
    },
  ];

  const upcomingMatches = [
    {
      id: 1,
      homeTeam: "Santos FC Women",
      awayTeam: "Palmeiras Women",
      date: "Dec 28, 2024",
      time: "19:00",
      homeLogo: "/placeholder.svg",
      awayLogo: "/placeholder.svg",
    },
    {
      id: 2,
      homeTeam: "Corinthians Women",
      awayTeam: "São Paulo Women",
      date: "Dec 30, 2024",
      time: "16:00",
      homeLogo: "/placeholder.svg",
      awayLogo: "/placeholder.svg",
    },
    {
      id: 3,
      homeTeam: "Flamengo Women",
      awayTeam: "Botafogo Women",
      date: "Jan 2, 2025",
      time: "20:00",
      homeLogo: "/placeholder.svg",
      awayLogo: "/placeholder.svg",
    },
  ];

  const teamOfTheWeek = [
    { name: "Ana Silva", position: "GK", image: "/placeholder.svg" },
    { name: "Carla Santos", position: "DEF", image: "/placeholder.svg" },
    { name: "Rita Lima", position: "MID", image: "/placeholder.svg" },
    { name: "Sofia Costa", position: "MID", image: "/placeholder.svg" },
    { name: "Lucia Mendes", position: "FWD", image: "/placeholder.svg" },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-brand-primary">Dashboard</h1>
      </div>

      {/* Featured Articles Carousel */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-neutral-dark">
            Featured Stories
          </h2>
          <Link
            to="/stories"
            className="flex items-center gap-1 text-brand-primary hover:text-brand-hover transition-colors"
          >
            <span className="text-sm">View All</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Card
              key={article.id}
              className="group cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-t-lg relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-base font-semibold text-neutral-dark mb-2 group-hover:text-brand-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-neutral-light">{article.byline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upcoming Matches */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-primary" />
                Upcoming Matches
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingMatches.map((match) => (
                <Link
                  key={match.id}
                  to={`/stats/match/${match.id}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-brand-primary hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-2 flex-1">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={match.homeLogo} />
                          <AvatarFallback>H</AvatarFallback>
                        </Avatar>
                        <span className="text-base font-medium text-neutral-dark truncate">
                          {match.homeTeam}
                        </span>
                      </div>

                      <div className="text-center px-2">
                        <span className="text-base font-bold text-neutral-dark">
                          vs
                        </span>
                      </div>

                      <div className="flex items-center gap-2 flex-1 justify-end">
                        <span className="text-base font-medium text-neutral-dark truncate">
                          {match.awayTeam}
                        </span>
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={match.awayLogo} />
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-sm text-neutral-light">
                      <Calendar className="w-3 h-3" />
                      {match.date}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-neutral-light">
                      <Clock className="w-3 h-3" />
                      {match.time}
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Quick Stats */}
        <section className="space-y-6">
          {/* Top Scorer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Goal className="w-5 h-5 text-brand-primary" />
                Top Scorer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                to="/athlete/maria-silva"
                className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-neutral-dark">
                    Maria Silva
                  </h3>
                  <p className="text-sm text-neutral-light">Santos FC Women</p>
                  <Badge
                    variant="secondary"
                    className="mt-1 bg-brand-primary/10 text-brand-primary"
                  >
                    12 goals
                  </Badge>
                </div>
                <ChevronRight className="w-5 h-5 text-neutral-light" />
              </Link>
            </CardContent>
          </Card>

          {/* Team of the Week */}
          <Card>
            <CardHeader>
              <CardTitle>Team of the Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {teamOfTheWeek.map((player, index) => (
                  <Link
                    key={index}
                    to={`/athlete/${player.name.toLowerCase().replace(" ", "-")}`}
                    className="flex-shrink-0 text-center group"
                  >
                    <Avatar className="w-12 h-12 mx-auto mb-2 group-hover:ring-2 group-hover:ring-brand-primary transition-all">
                      <AvatarImage src={player.image} />
                      <AvatarFallback>
                        {player.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-xs font-medium text-neutral-dark group-hover:text-brand-primary transition-colors">
                      {player.name.split(" ")[0]}
                    </p>
                    <p className="text-xs text-neutral-light">
                      {player.position}
                    </p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Match Tracker */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Live Match
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                to="/stats/live/current"
                className="block p-4 border border-brand-primary/20 bg-brand-primary/5 rounded-lg hover:bg-brand-primary/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>SF</AvatarFallback>
                    </Avatar>
                    <span className="text-base font-medium">Santos FC</span>
                  </div>

                  <div className="text-center">
                    <div className="text-h2 font-bold text-brand-primary">
                      2 - 1
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">Palmeiras</span>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>PA</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div className="text-center">
                  <Badge
                    variant="outline"
                    className="border-brand-primary text-brand-primary"
                  >
                    75' LIVE
                  </Badge>
                </div>
              </Link>
            </CardContent>
          </Card>

          {/* Latest Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Latest Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-lg overflow-hidden cursor-pointer group">
                <img
                  src="/placeholder.svg"
                  alt="Match highlights"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-brand-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-base font-semibold text-white mb-1">
                    Best Goals of the Week
                  </h4>
                  <p className="text-sm text-white/80">3:45 minutes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
