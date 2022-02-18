FROM node:current-alpine3.15

RUN mkdir /app
COPY package.json /app
COPY package-lock.json /app

WORKDIR /app

RUN npm ci

CMD ["npm", "run", "build"]