FROM node:6-onbuild
MAINTAINER Gavin Mogan <docker@gavinmogan.com>
EXPOSE 3000
ENV NODE_ENV=production

RUN cd $(npm root -g)/npm \
  && npm install fs-extra \
  && sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js
ADD package.json /tmp/package.json
RUN cd /tmp && NODE_ENV=development npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app
COPY . /usr/src/app/
# UGH - okay fine
# Fix bug https://github.com/npm/npm/issues/9863 for issues with docker + npm
RUN npm run build
RUN npm prune --production
CMD npm run start

