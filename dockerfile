FROM node:18
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start", "--port=3000"]