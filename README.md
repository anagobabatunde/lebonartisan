# lebonartisan

requirements
make
docker
docker-compose

change mongo db host if you want to launch project without docker
in database.js change hostname from "mongo" to your_ip_adress

launch with Makefile

in root mv .env.example .env
int front dir mv .env.example .env
int back dir mv .env.example .env

int root make build-all
make
watch log to see ip adress for react app