FROM node:20-slim
WORKDIR /app
# Copia os arquivos de dependências
COPY package*.json ./
RUN npm install
# Copia o restante dos arquivos
COPY . .
# Expõe a porta do Express

EXPOSE 3000
# Comando para rodar em modo desenvolvimento
CMD ["npm", "run", "dev"]