FROM node:18
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN yarn install
EXPOSE 8004 8004
CMD ["yarn", "start"]
