FROM node:latest AS build

RUN apt-get update \
    && apt-get upgrade -y

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install



FROM node:18.14.0-alpine

ENV NODE_ENV development

USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app

CMD ["npm", "run", "dev"]