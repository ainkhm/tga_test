
# FROM node:12-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN yarn cache clean && yarn --update-checksums

# COPY build/server.js /app/server.js
# COPY build/assets.json /app/assets.json
# COPY build/server.js.map /app/server.js.map
# COPY build/public /app/public/

# EXPOSE 3000

# RUN yarn install

# CMD ["yarn", "start:prod"]

FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install --only=production
RUN yarn global add pm2-deploy

ENV NODE_ENV=production
ARG PRJ_ENV=staging
ENV PRJ_ENV="${PRJ_ENV}"
ARG PUBLIC_PATH=http://localhost:3000
ENV PUBLIC_PATH="${PUBLIC_PATH}"

COPY build/server.js /app/server.js
COPY build/assets.json /app/assets.json
COPY build/server.js.map /app/server.js.map
COPY build/public /app/public/

EXPOSE 3000

CMD ["yarn", "start:prod"]
