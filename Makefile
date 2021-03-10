run-dev:
	docker-compose up --force-recreate
down:
	docker-compose down
restart:
	$(down)
	$(run-dev)
build-all:
	cd front && $(MAKE)
	cd back && $(MAKE)