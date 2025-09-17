import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // Configuração para Coolify (sem subpath)
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Configuração da URL da API baseada no ambiente
    __API_URL__: mode === 'production' 
      ? JSON.stringify('https://passabola.suricatox.com.br') // URL do backend em produção
      : JSON.stringify('http://localhost:3000')
  }
}));
