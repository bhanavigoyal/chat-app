FROM node:alpine3.11

WORKDIR /app
COPY chat-Frontend/package*.json ./
RUN npm install
COPY chat-Frontend/ .
RUN npm run build
EXPOSE $PORT
CMD ["npm","run","dev"]
