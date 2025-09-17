import { useState, useEffect } from 'react';

export interface Article {
  id: number;
  title: string;
  byline: string;
  image: string;
  content: string;
  category: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface ArticlesResponse {
  success: boolean;
  data: Article[];
  total: number;
}

export interface ArticleResponse {
  success: boolean;
  data: Article;
}

// URL base da API - configurada via Vite
const API_BASE_URL = (globalThis as any).__API_URL__ || 'https://passabola.suricatox.com.br';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/api/featured-articles`);
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      
      const data: ArticlesResponse = await response.json();
      
      if (data.success) {
        setArticles(data.data);
      } else {
        throw new Error('Falha ao carregar as notícias');
      }
    } catch (err) {
      console.error('Erro ao buscar notícias:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      
      // Fallback para dados mock em caso de erro
      setArticles([
        {
          id: 1,
          title: "Brazil Women's Team Advances to Final",
          byline: "Maria Santos • 2 hours ago",
          image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop&crop=center",
          content: "The Brazilian women's national team secured their place in the championship final with a stunning 3-1 victory over their rivals.",
          category: "Championship",
          publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          author: {
            name: "Maria Santos",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c87c?w=100&h=100&fit=crop&crop=face"
          }
        },
        {
          id: 2,
          title: "Rising Star: Ana Silva's Journey",
          byline: "Carlos Mendes • 5 hours ago",
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
          content: "Ana Silva's remarkable journey from local leagues to national recognition has been nothing short of inspirational.",
          category: "Player Profile",
          publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
          author: {
            name: "Carlos Mendes",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
          }
        },
        {
          id: 3,
          title: "Championship Preview: What to Expect",
          byline: "Lucia Oliveira • 1 day ago",
          image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=300&fit=crop&crop=center",
          content: "As the championship approaches its climax, we analyze the key factors that will determine the outcome.",
          category: "Analysis",
          publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          author: {
            name: "Lucia Oliveira",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
          }
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fetchArticleById = async (id: number): Promise<Article | null> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/articles/${id}`);
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      
      const data: ArticleResponse = await response.json();
      
      if (data.success) {
        return data.data;
      } else {
        throw new Error('Falha ao carregar a notícia');
      }
    } catch (err) {
      console.error('Erro ao buscar notícia:', err);
      return null;
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    articles,
    loading,
    error,
    refetch: fetchArticles,
    fetchArticleById
  };
};
