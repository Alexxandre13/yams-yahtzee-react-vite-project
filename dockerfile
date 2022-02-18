FROM node:current-alpine3.15

RUN mkdir /app
COPY package*.json /app

WORKDIR /app

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]