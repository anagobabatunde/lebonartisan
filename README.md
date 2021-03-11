# lebonartisan

requirements
make
docker
docker-compose

change mongo db host if you want to launch project without docker
in database.js change hostname from "mongo" to your_ip_adress

launch with Makefile

in root 
````
mv .env.example .env
````

in front
````
mv .env.example .env
````

in back
````
mv .env.example .env
````

in root 
````
make build-all
````
and
````
make
````

watch log to see ip adress for react app