FROM node:current-alpine3.15 as builder

RUN mkdir /app

COPY package.json /app
COPY package-lock.json /app

WORKDIR /app

RUN npm ci

COPY . .

RUN npm run build

FROM lipanski/docker-static-website:latest

COPY --from=builder /app/dist .