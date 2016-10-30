FROM node:argon
MAINTAINER Gavin Mogan <docker@gavinmogan.com>
EXPOSE 3000
ENV NODE_ENV=production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /tmp/
RUN cd /tmp && NODE_ENV=development npm install
RUN mkdir -p /usr/src/app && mv /tmp/node_modules /usr/src/app && rm /tmp/package.json

COPY . /usr/src/app/
RUN npm run build && npm prune --production
CMD ["npm","start"]

