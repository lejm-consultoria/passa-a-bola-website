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

1. Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. No GitHub, vá em Settings > Pages
3. Selecione "GitHub Actions" como fonte
4. Faça push do código e aguarde o deploy automático

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

#### Problema: Página em branco no GitHub Pages
**Solução:** Verifique se o `base` no `vite.config.ts` está correto e corresponde ao nome do repositório.

#### Problema: Assets não carregam
**Solução:** Certifique-se de que todos os caminhos estão relativos e o `base` está configurado corretamente.

#### Problema: Roteamento não funciona
**Solução:** Configure o roteador para usar hash routing ou configure o servidor para servir `index.html` para todas as rotas.

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
