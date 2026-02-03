# Conteiner

## Iniciando com Docker

**Docker**<br>
`Docker` e uma plataforma de containerização, que permite empacotar uma aplicação com tudo que ela precisa para rodar, em um ambientes isolado.<br>

**Dockerfile**<br>
É a receita que descreve como o `Docker` deve criar a imagem.<br>
`Dockerfile`

```dockerfile
FROM node:18-alpine #Imagem base com Node.js 18 em Alpine Linux (leve e otimizada)

WORKDIR /app  #Define o diretório de trabalho dentro do container

COPY package.json . #Copia apenas o package.json para aproveitar cache de dependências

RUN npm install #Instala as dependências do projeto
COPY . .  #Copia todo o projeto para dentro do container

CMD ["npm", "run", "dev"] #Comando executado quando o container iniciar
```

**image**<br>
A `imagem` e criada a partir da compilação do `Dockerfile`, Ela e executada em um `Conteiner`.

**Conteiner**<br>
Um `Conteiner` é uma instância em execução de uma `imagem` docker.

---

**Docker Compose**<br>
`Compose` e uma ferramenta para orquestrar múltiplos containers de forma simples, usando um único arquivo, permitindo rodar varios serviços juntos.

Em vez de vários `docker run`, você define tudo em um arquivo `compose.yaml`.

```yaml
services:
  database:
    image: "postgres:16.11-alpine3.22" #Define imagem usada.
    environment: #variáveis de ambiente
      POSTGRES_PASSWORD: "seu_password" #Define senhar para o conteiner
    ports:
      - "5432:5432" #Mapeamento host:conteiner
```

---

- [◀ Inicio](../README.md)
