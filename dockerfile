FROM node:current-alpine3.15 as builder

RUN mkdir /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM lipanski/docker-static-website:latest

COPY --from=builder /app/dist .