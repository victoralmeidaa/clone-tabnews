# Prerarando o ambiente!

## Instalando versão do Node.js

### NVM (Node Version Manager)

**Gerenciador de versões do Node.js.** <br>
`nvm install` instala uma versão especifica do `Node.js`, o comando deve ser executado seguido da versão desejada.

```bash
nvm install 18.20.8
```

**Definindo versão**<br>
O comando `nvm ls` lista todas as versoes do `Node.js` instaladas no sistema.

```bash
nvm ls
```

Este comando deve retornar ao menos uma versão instalada no sistema<br>
Sainda:

```diff
 19.9.0
*18.20.8
```

O `*` indica qual versão esta ativa quando existe mais de uma versão instalada.<br>

**Versões LTS**<br>
o comando `nvm install lts/hydrogen` instala a versão LTS (Long Term Support) do `Node.js` chamado _Hydrogen_.

```bash
nvm install lts/hydrogen
```

As versoes listadas como `LTS` são versões mais estáveis, seguras e mantida por mais tempo.

**Alias Default**<br>
O alias default define qual versão do `Node.js` será usado automaticamente sempre que você abrir o terminal

usando LTS:

```bash
nvm alias default lts/hydrogen
```

ou usando versão especifica com:

```bash
nvm alias default 18.20.4
```

Usar o comando `node --version` ou `node -v` para mostrar a versão definida.

```bash

```

**Run Commands nvm `.nvmrc`**<br>
O arquivo `.nvmrc` define qual versão do `Node.js` o projeto deve usar.<br>
Evita erro de versão e padroniza o ambiente.<br>
Dentro do arquivo coloque apenas a versão.

```txt
18 ou
v18.20.4 ou
lts/*
```

---

## Iniciando o projeto

**npm init**<br>
Ao executar este comando, ele cria o arquivo `package.json`.

```bash
npm init
```

Exemplo de `package.json` criado.

```json
{
  "name": "clone-tabnews",
  "version": "1.0.0",
  "description": "Projeto clone do TabNews",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\""
  },
  "author": "Victor Almeida",
  "license": "MIT"
}
```

**Package Json**<br>
O `package.json` e o arquivo central de qualquer projeto `Node`/`React`/`Next.js`.<br>
Ele descreve o que é o projeto, como ele roda e do que ele depende.

## Instalando dependencias

### NPM (Node Package Manager)

**Gerenciador de pacotes**<br>
O `npm` serve para instalar, remover, atualizar e executar bibliotecas usadas em projetos JavaScript.<br>
O `npm` vem junto quando o `Node.js` e instalado.<br>
Roda scripts como o `npm run dev` e controla versões de pacotes.<br>

**Dependencias**<br>
O comando `npm install` baixa todas as dependências necessárias listadas no `packege.json`

```bash
npm install
```

Após o comando, Lê o `package.json`<br>
Instala as dependencias listadas no arquivo `package.json`.<br>
Cria a pasta `node_modules/`<br>
Gera(ou atualiza) o `packege-lock.json`.<br>

A pasta `node_modules/` não sobe para o github (fica no `.gitignore`).<br>
Você usa sempre que clonar um repositorio do Github, baixar um projeto pronto, quando for rodar um projeto Node/React/Next pela primeira vez.

---

**Instalando NEXT**<br>
O comando `npm install next@13.1.6` instala o `next.js` na versão `v13.1.6` no projeto.<br>
Ele também cria/atualiza o `node_modules`.<br>
Adiciona o `Next` em dependencies no `package.json`

```bash
npm install next@13.1.6
```

`package.json`

```json
"dependencies":{
  "next": "13.1.6"
}
```

Atualiza o `package-look.json`.

---

**Intalando React**<br>
O comando `npm install react@18.2.0` instala o `React` na versão `v18.2.0` no projeto.<br>
Ele atualiza o `package.json` e `package-look.json`.<br>
Cria/atualiza o `node_molules/react`.

```bash
npm install react@18.2.0
```

Para renderizar as interfaces criadas com `React` no navegador, vamos usar o `React-dom`.

```bash
npm install react-dom@18.2.0
```

Após instalados as dependencias do `package.json` também foram atualizadas.

```json
"dependencies": {
    "next": "13.1.6",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
```

---
