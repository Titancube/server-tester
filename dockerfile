FROM node:18

LABEL maintainer="kbin0717@gmail.com"
LABEL name="Gyubin Lee"
LABEL version="1.0.0"

RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN yarn install
RUN yarn global add typescript

EXPOSE 3000

CMD ["yarn", "start", "--port=3000"]