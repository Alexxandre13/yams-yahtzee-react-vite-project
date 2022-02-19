FROM node:current-alpine3.15 as builder
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM lipanski/docker-static-website:latest
COPY --from=builder /app/dist .