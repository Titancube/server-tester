#!/bin/sh

echo "# 🔁 Updating to latest image"
docker compose pull
echo "# 🧰 Composing new container"
docker compose up -d --no-deps --build server-tester
echo "# ✅️ New container is up and running"
