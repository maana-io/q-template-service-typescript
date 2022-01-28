FROM node:14-alpine
WORKDIR /usr/app/template-service
COPY ./package*.json /usr/app/template-service

RUN npm install

COPY . /usr/app/template-service
RUN npm run build
RUN rm -rf node_modules src

FROM node:14-alpine
WORKDIR /usr/app/template-service
COPY --from=0 /usr/app/template-service .

RUN npm install --production --no-optional && \
  npm dedupe && \
  npm cache clear --force

EXPOSE 8050

CMD ["npm", "run", "start"]
