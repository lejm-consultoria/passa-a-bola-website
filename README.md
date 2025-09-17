# Passa a Bola Website

Um projeto React moderno construído com Vite, TypeScript e Tailwind CSS.

## 🚀 Como Buildar e Hospedar no GitHub Pages

### Pré-requisitos
- Node.js instalado (versão 16 ou superior)
- Git configurado
- Conta no GitHub

### Passo a Passo

#### 1. Instalar Dependências
```bash
npm install
```

#### 2. Configurar o Vite para GitHub Pages
Primeiro, precisamos configurar o Vite para funcionar corretamente no GitHub Pages. Edite o arquivo `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: "/passa-a-bola-website/", // Substitua pelo nome do seu repositório
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
}));
```

**Importante:** Substitua `passa-a-bola-website` pelo nome exato do seu repositório no GitHub.

#### 3. Buildar o Projeto
```bash
npm run build
```

Este comando irá:
- Compilar o TypeScript
- Processar os arquivos CSS com Tailwind
- Otimizar as imagens e assets
- Gerar os arquivos estáticos na pasta `dist/`

#### 4. Verificar o Build Localmente
```bash
# Instalar um servidor local para testar
npm install -g serve

# Servir a pasta dist
serve -s dist
```

Acesse `http://localhost:3000` para verificar se tudo está funcionando.

#### 5. Configurar GitHub Pages

##### Opção A: Usando GitHub Actions (Recomendado)

1. O arquivo `.github/workflows/deploy.yml` já foi criado com a configuração correta.

2. **IMPORTANTE:** No GitHub, vá em Settings > Pages:
   - Em "Source", selecione "GitHub Actions"
   - **NÃO** selecione "Deploy from a branch"

3. Faça commit e push do código:
```bash
git add .
git commit -m "Configurar deploy para GitHub Pages"
git push origin main
```

4. Aguarde o deploy automático. Você pode acompanhar o progresso em Actions > Deploy to GitHub Pages

##### Opção B: Deploy Manual

1. Instale o gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione os scripts no `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Execute o deploy:
```bash
npm run deploy
```

#### 6. Configurações Adicionais

##### Atualizar o título da página
Edite o arquivo `index.html`:
```html
<title>Passa a Bola - Website</title>
```

##### Configurar meta tags
Adicione no `<head>` do `index.html`:
```html
<meta name="description" content="Passa a Bola - Seu site de futebol">
<meta name="keywords" content="futebol, esporte, estatísticas">
```

### 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Testes
npm run test

# Verificar tipos TypeScript
npm run typecheck

# Formatar código
npm run format.fix
```

### 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── layout/         # Componentes de layout
│   └── ui/             # Componentes de UI
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── lib/                # Utilitários
└── main.tsx           # Ponto de entrada
```

### 🚨 Troubleshooting

#### Problema: Site mostra HTML básico sem React (404 em /src/main.tsx)
**Causa:** GitHub Pages está servindo o `index.html` da raiz em vez dos arquivos buildados.
**Solução:** 
1. Verifique se em Settings > Pages está selecionado "GitHub Actions" como fonte
2. **NÃO** selecione "Deploy from a branch"
3. Verifique se o workflow está rodando em Actions
4. Aguarde o deploy completo (pode levar alguns minutos)

#### Problema: Página em branco no GitHub Pages
**Solução:** Verifique se o `base` no `vite.config.ts` está correto e corresponde ao nome do repositório.

#### Problema: Assets não carregam
**Solução:** Certifique-se de que todos os caminhos estão relativos e o `base` está configurado corretamente.

#### Problema: Roteamento não funciona
**Solução:** Configure o roteador para usar hash routing ou configure o servidor para servir `index.html` para todas as rotas.

#### Problema: Workflow não executa
**Solução:** 
1. Verifique se o arquivo `.github/workflows/deploy.yml` existe
2. Verifique se está na branch `main`
3. Verifique se as permissões do repositório estão corretas

### 📝 Notas Importantes

1. **Nome do repositório:** O nome do repositório no GitHub deve corresponder ao valor do `base` no `vite.config.ts`
2. **Branch:** O GitHub Pages por padrão usa a branch `gh-pages` ou `main`
3. **HTTPS:** O GitHub Pages força HTTPS em produção
4. **Cache:** Pode levar alguns minutos para as mudanças aparecerem devido ao cache do GitHub

### 🔗 Links Úteis

- [Documentação do Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Desenvolvido com ❤️ usando React + Vite + TypeScript**
