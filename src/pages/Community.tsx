import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  Share2,
  Image as ImageIcon,
  Send,
  MoreHorizontal,
  UserPlus,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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

interface Comment {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

interface Post {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
  shares: number;
}

const Community: React.FC = () => {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: {
        name: "Ana Clara",
        username: "@anaclara10",
        avatar: "/placeholder.svg",
      },
      content:
        "Orgulhosa da nossa vitória ontem! 💪⚽ Que jogo incrível das meninas!",
      image: "/placeholder.svg",
      timestamp: "há 2 horas",
      likes: 23,
      liked: true,
      shares: 5,
      comments: [
        {
          id: "c1",
          author: {
            name: "Júlia Santos",
            username: "@julia_santos",
            avatar: "/placeholder.svg",
          },
          content: "Arrebentaram! 🔥",
          timestamp: "há 1 hora",
        },
        {
          id: "c2",
          author: {
            name: "Maria Silva",
            username: "@maria_silva",
            avatar: "/placeholder.svg",
          },
          content: "Foi demais mesmo! Parabéns pelo gol!",
          timestamp: "há 30 min",
        },
      ],
    },
    {
      id: "2",
      author: {
        name: "Carla Mendes",
        username: "@carla_mendes",
        avatar: "/placeholder.svg",
      },
      content:
        "Treino pesado hoje! Quem mais está se preparando para a próxima temporada? 🏃‍♀️",
      timestamp: "há 4 horas",
      likes: 15,
      liked: false,
      shares: 2,
      comments: [
        {
          id: "c3",
          author: {
            name: "Beatriz Costa",
            username: "@beatriz_costa",
            avatar: "/placeholder.svg",
          },
          content: "Eu! Treino todos os dias 💪",
          timestamp: "há 2 horas",
        },
      ],
    },
    {
      id: "3",
      author: {
        name: "Sofia Lima",
        username: "@sofia_lima",
        avatar: "/placeholder.svg",
      },
      content:
        "Inspiração do dia: 'O futebol feminino não é uma versão do masculino. É futebol!' 🌟",
      timestamp: "há 6 horas",
      likes: 41,
      liked: true,
      shares: 12,
      comments: [],
    },
  ]);

  const [newComments, setNewComments] = useState<{ [key: string]: string }>({});
  const [expandedComments, setExpandedComments] = useState<Set<string>>(
    new Set(),
  );

  // Trending tags
  const trendingTags = [
    "#futebolfeminino",
    "#goleiras",
    "#inspiração",
    "#brasileirão",
    "#campeonato",
    "#treino",
  ];

  // Profile suggestions
  const profileSuggestions = [
    {
      name: "Marta Vieira",
      username: "@marta10oficial",
      avatar: "/placeholder.svg",
      verified: true,
    },
    {
      name: "Cristiane Rozeira",
      username: "@cris_rozeira",
      avatar: "/placeholder.svg",
      verified: false,
    },
    {
      name: "Bia Zaneratto",
      username: "@biazaneratto",
      avatar: "/placeholder.svg",
      verified: true,
    },
  ];

  const handleCreatePost = () => {
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      author: {
        name: "Você",
        username: "@voce",
        avatar: "/placeholder.svg",
      },
      content: newPost,
      timestamp: "agora",
      likes: 0,
      liked: false,
      shares: 0,
      comments: [],
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  const handleComment = (postId: string, content: string) => {
    if (!content.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "Você",
        username: "@voce",
        avatar: "/placeholder.svg",
      },
      content,
      timestamp: "agora",
    };

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post,
      ),
    );

    setNewComments({ ...newComments, [postId]: "" });
  };

  const toggleComments = (postId: string) => {
    const newExpanded = new Set(expandedComments);
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId);
    } else {
      newExpanded.add(postId);
    }
    setExpandedComments(newExpanded);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Section A - Title & Subtitle */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-primary mb-2">
          Comunidade
        </h1>
        <h2 className="text-lg font-semibold text-neutral-light">
          Compartilhe, apoie e se conecte com outras jogadoras.
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content - Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section B - Post Composer */}
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>V</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <Textarea
                    placeholder="No que você está pensando?"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-[100px] resize-none border-gray-200 focus:border-brand-primary"
                  />
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neutral-light hover:text-brand-primary"
                    >
                      <ImageIcon className="w-5 h-5 mr-2" />
                      Adicionar foto
                    </Button>
                    <Button
                      onClick={handleCreatePost}
                      disabled={!newPost.trim()}
                      className="btn-primary"
                      style={{ width: "120px", height: "40px" }}
                    >
                      Publicar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section C - Feed Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <Link
                      to={`/athlete/${post.author.username.slice(1)}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-neutral-dark">
                          {post.author.name}
                        </h3>
                        <p className="text-sm text-neutral-light">
                          {post.author.username} • {post.timestamp}
                        </p>
                      </div>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="text-base text-neutral-dark leading-relaxed mb-4">
                      {post.content}
                    </p>
                    {post.image && (
                      <div className="rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={post.image}
                          alt="Post image"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center gap-6 pb-4 border-b border-gray-100">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 transition-colors ${
                        post.liked
                          ? "text-red-500 hover:text-red-600"
                          : "text-neutral-light hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${post.liked ? "fill-current" : ""}`}
                      />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>

                    <button
                      onClick={() => toggleComments(post.id)}
                      className="flex items-center gap-2 text-neutral-light hover:text-brand-primary transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {post.comments.length}
                      </span>
                    </button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center gap-2 text-neutral-light hover:text-brand-primary transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            {post.shares}
                          </span>
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Compartilhar Post</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-neutral-dark">
                            Compartilhe este post com suas amigas!
                          </p>
                          <div className="flex gap-2">
                            <Button className="flex-1" variant="outline">
                              Copiar Link
                            </Button>
                            <Button className="flex-1 btn-primary">
                              Compartilhar
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Comments Section */}
                  {expandedComments.has(post.id) && (
                    <div className="pt-4 space-y-4">
                      {/* Existing Comments */}
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={comment.author.avatar} />
                            <AvatarFallback>
                              {comment.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm text-neutral-dark">
                                  {comment.author.name}
                                </span>
                                <span className="text-xs text-neutral-light">
                                  {comment.timestamp}
                                </span>
                              </div>
                              <p className="text-sm text-neutral-dark">
                                {comment.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* New Comment Input */}
                      <div className="flex gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>V</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 flex gap-2">
                          <Input
                            placeholder="Escreva um comentário..."
                            value={newComments[post.id] || ""}
                            onChange={(e) =>
                              setNewComments({
                                ...newComments,
                                [post.id]: e.target.value,
                              })
                            }
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                handleComment(
                                  post.id,
                                  newComments[post.id] || "",
                                );
                              }
                            }}
                            className="flex-1"
                          />
                          <Button
                            size="sm"
                            onClick={() =>
                              handleComment(post.id, newComments[post.id] || "")
                            }
                            disabled={!newComments[post.id]?.trim()}
                            className="btn-primary px-3"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section D - Sidebar (Desktop only) */}
        <div className="hidden lg:block space-y-6">
          {/* Trending Tags */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-brand-primary" />
                <h3 className="font-bold text-neutral-dark">Tags em Alta</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white cursor-pointer transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Profile Suggestions */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-neutral-dark mb-4">
                Sugestões de Perfil
              </h3>
              <div className="space-y-4">
                {profileSuggestions.map((profile) => (
                  <div
                    key={profile.username}
                    className="flex items-center justify-between"
                  >
                    <Link
                      to={`/athlete/${profile.username.slice(1)}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={profile.avatar} />
                        <AvatarFallback>
                          {profile.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-sm text-neutral-dark">
                            {profile.name}
                          </span>
                          {profile.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-neutral-light">
                          {profile.username}
                        </span>
                      </div>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                    >
                      <UserPlus className="w-4 h-4 mr-1" />
                      Seguir
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
