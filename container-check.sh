echo "# Checking if docker container exists"
if [ "$(docker container inspect -f '{{.State.Status}}' server-tester)" == "true" ];
then
  echo # ⤷ ⚠️ Found container and trying to stop the process
  docker rm -f server-tester
  echo # ⤷ ✅ Successfully stopped the process
fi

echo # ⚒️ Composing new container
docker compose up -d
echo # ✅️ New container is up and running
