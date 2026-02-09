# Banco de dados

## Subindo banco com compose

**docker compose up**<br>
O comando `docker compose up` Lê o arquivo `compose.yaml` e cria um conteiner para cada serviço especificado no arquivo.<br>

```bash
docker compose up
```

Outros parametros docker compose:

```bash
docker compose up -d     # inicia serviços em backgound
docker compose ps        # lista status processos
docker compose ps -a     # lista status processos todos
docker compose logs      # ver logs
docker compose logs -f   # logs em tempo real
docker compose down      # derrubar tudo
docker compose stop      # parar serviços
docker compose start     # iniciar serviços
docker compose up --force-recreate # destrói e recria o container
```

---

## PSQL

**Cliente-PostgreSQL**<br>
O `psql` e o cliente CLI oficial do `PostgreSQL`, Usado para executar comandos `SQL` e administrar diretamente o banco de dados.<br>

Para instalar o `psql` usaremos o comendo. (Ubunto/Debian).

```bash
sudo apt update
sudo apt install postgresql-client
```

Conectando banco com a maquina local.<br>
Usando o `psql` informamos o `host` apontando para o `localhost`, o user do banco `username` como `postgres`(usuario padrão) e a porta usada `port` como `5432`(porta padrão).

```bash
psql --host=localhost --username=postgres --port=5432
```

Estes dados, assim como o `password` geralmente estão esposto no arquivo `compose.yaml`

```yaml
services:
  database:
    image: "postgres:16.11-alpine3.22"
    environment:
      POSTGRES_PASSWORD: "local_password"
    ports:
      - "5432:5432"
```

---
