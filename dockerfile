FROM node:current-alpine3.15 as builder
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM pierrezemb/gostatic:latest
COPY --from=builder /app/dist /srv/http
EXPOSE 8043
CMD ["goStatic"]