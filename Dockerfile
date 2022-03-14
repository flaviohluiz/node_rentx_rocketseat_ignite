# Qual imagem o docker deve instalar
FROM node

# Definir uma pasta/ diretório de trabalho (onde colocaremos informações)
WORKDIR /usr/app

COPY package.json ./

# instalar as dependencias do npm
RUN npm install 

#Copiar tudo para nossa pasta raiz
COPY . .

EXPOSE 3333

#Permite rodar os comandos que precisamos
CMD ["npm", "run", "dev"]

#docker build -t rentx .
#docker run -p 3333:3333 imagem