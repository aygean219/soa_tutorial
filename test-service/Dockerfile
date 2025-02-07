FROM node:lts-alpine

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY test-service ./

ENTRYPOINT node main.js