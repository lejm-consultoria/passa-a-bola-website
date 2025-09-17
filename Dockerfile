# Dockerfile para o Frontend (React + Vite)
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install --legacy-peer-deps

# Copia todo o código da app
COPY . .

# Build da aplicação
RUN npm run build

# Instala serve para servir arquivos estáticos
RUN npm install -g serve

# Expor porta 3000
EXPOSE 3000

# Comando para servir os arquivos buildados
CMD ["serve", "-s", "dist", "-l", "3000"]
