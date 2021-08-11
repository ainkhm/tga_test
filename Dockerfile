FROM node:14-alpine

WORKDIR '/app'
COPY ./package.json ./package.json
RUN yarn install
COPY . .
RUN yarn build --prod

CMD [ "yarn", "run", "start:prod" ]