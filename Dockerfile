FROM node:argon
MAINTAINER Gavin Mogan <docker@gavinmogan.com>
EXPOSE 3000
ENV NODE_ENV=production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# UGH - okay fine
# Fix bug https://github.com/npm/npm/issues/9863 for issues with docker + npm
RUN cd $(npm root -g)/npm \
  && npm install fs-extra \
  && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js
# Install app dependencies
COPY package.json /tmp/
RUN cd /tmp && NODE_ENV=development npm install
RUN mkdir -p /usr/src/app && mv /tmp/node_modules /usr/src/app && RM /tmp/package.json

COPY . /usr/src/app/
RUN npm run build && npm prune --production
CMD ["npm","start"]

