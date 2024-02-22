include .env

COMPOSE_FILE = docker-compose.yml

.PHONY: install
install:
	sudo docker network create $(PROJECT)_network || true
	sudo docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) up -d --build

.PHONY: deploy
deploy:
	sudo docker exec -u root $(PROJECT)_app /bin/sh -c 'chown -R 1733:1733 "/root/"'
	sudo docker exec $(PROJECT)_app /bin/sh -c 'npm install'
	sudo docker exec $(PROJECT)_app /bin/sh -c 'pm2 start server.js'
	

.PHONY: reset
reset:
	sudo docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) kill && \
	sudo docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) rm -f && \
	sudo docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) up -d --build

.PHONY: stop
stop:
	sudo docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) stop 

.PHONY: configDB
configDB:
	docker cp postgresql.conf ytb_server_db_1:/var/lib/postgresql/data/postgresql.conf
	docker restart ytb_server_db_1

.PHONY: remove
remove:
	sudo docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) down --rmi all

.PHONY: shell
shell:
	sudo docker exec -it $(PROJECT)_app /bin/sh

.PHONY: admin
admin:
	sudo docker exec -it $(PROJECT)_admin /bin/sh

.PHONY: db
db:
	docker exec -it $(PROJECT)_db /bin/bash

.PHONY: node
node:
	sudo apt-get install -y xz-utils wget tar
	wget -nc https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-x64.tar.xz
	sudo tar --strip-components 1 -xJvf node-* -C /usr 
	rm -rf node-*

.PHONY: docker
docker:
	curl -fsSL https://get.docker.com -o get-docker.sh
	sh get-docker.sh && rm -rf get-docker.sh
	sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-Linux-x86_64" -o /usr/bin/docker-compose
	sudo chmod +x /usr/bin/docker-compose
	sudo systemctl start docker

.PHONY: clonedb
clonedb:
	sudo docker exec $(PROJECT)_db /bin/sh -c 'PGPASSWORD="sungpostgres" pg_dump --host tayytb.cecaebwfoekp.ap-southeast-1.rds.amazonaws.com --port 5432 --user postgres mydb > backup.sql' # export db from other host
	sudo docker exec $(PROJECT)_db /bin/sh -c 'psql -h localhost -p 5432 -d mydb -U postgres -f backup.sql' # import backup.sql

.PHONY: backupdb
backupdb:
	sudo docker exec $(PROJECT)_db /bin/sh -c 'PGPASSWORD="postgressung" pg_dump --host localhost --port 5432 --user postgres mydb > backup.sql' # export db from other host
	sudo docker cp $(PROJECT)_db:/backup.sql backup.sql

.PHONY: restoredb
restoredb:
	sudo docker cp backup.sql $(PROJECT)_db:/backup.sql
	sudo docker exec $(PROJECT)_db /bin/sh -c 'psql -h localhost -p 5432 -d mydb -U postgres -f backup.sql' # import backup.sql
	
.PHONY: product
product:
	make docker
	make reset
	make deploy

.PHONY: start
start:
	sudo systemctl start docker
	sudo docker-compose -f $(COMPOSE_FILE) -p $(PROJECT) up -d
	sudo docker exec $(PROJECT)_app /bin/sh -c 'pm2 start server.js'
	sudo docker exec reup_admin /bin/sh -c 'nohup npm run start &'