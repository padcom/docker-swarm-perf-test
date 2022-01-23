FROM node:17.4.0-alpine

ADD . /app

WORKDIR /app

RUN npm ci

EXPOSE 5001

CMD [ "node", "index.js" ]
