#!/usr/bin/zsh

if [ "$(docker container inspect -f '{{.State.Status}}' server-tester)" == "true" ];
then
  docker rm -f server-tester
fi

docker compose up -d
