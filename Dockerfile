FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "out"]

# sudo docker build -t my-portfolio .
# sudo docker -p 3000:3000 my-portfolio