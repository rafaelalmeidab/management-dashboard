# Use a imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e yarn.lock para o diretório de trabalho
COPY package.json yarn.lock ./

# Instala as dependências do projeto
RUN yarn install

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta que o Vite usa
EXPOSE 5174

# Define o comando para iniciar a aplicação
CMD ["yarn", "start"]
