FROM node:17-buster as builder

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM lipanski/docker-static-website:latest

COPY --from=builder /app/dist .