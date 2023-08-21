script=./scripts/dcTool

build:
	$(script) build $(env) $(version)

dev:
	$(script) compose dev up -d

prod:
	$(script) compose prod up -d

staging:
	$(script) compose staging up -d

stop-prod:
	$(script) compose prod stop

stop-staging:
	$(script) compose staging stop

stop-dev:
	$(script) compose dev stop

down-prod:
	$(script) compose prod down

down-staging:
	$(script) compose staging down

down-dev:
	$(script) compose dev down

kill-prod:
	$(script) compose prod down -v

kill-staging:
	$(script) compose staging down -v

kill-dev:
	$(script) compose dev down -v

app:
	docker exec -it app sh

db:
	docker exec -it db bash
