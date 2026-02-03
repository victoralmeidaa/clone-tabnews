# GIT / GITHUB

**Comandos Basicos GIT**<br>
Fluxo de comandos `git` após o `git init`

```bash
git add
git commit -m "Comentario Commit"
git branch -M main
git remote add origin "https://github.com/usuario/repositorio.git"
git push -u origin main
```

`git add` prepara aquivos para commit.<br>
`git commit -m` prepara arquivos para o push `-m` permite incluir um comentario ao commit.<br>
`git branch -M main` define(ou renomeia) a branch principal do projeto para `main`, o `-M` força a mudança caso ja exista uma branch com este nome.<br>
`git remote add origin` conecta seu repositorio local a um repositorio remoto, `git remote` gerencia repositorios remoto, `add`adiciona um novo remoto, `origin` e o nome padrão dado ao repositório remoto principal.<br>

## Git clone

**Usando Git para clonar um repositorio existente**<br>
O comando `git clone` cria uma copia local do repositorio, puchando do link especificado na seguencia do comanado.<br>

```bash
git clone https://github.com/victoralmeidaa/cline-tabnews.git
cd clone-tabnwes
```

O comando `cd clone-tabnews` serve para entra na pasta do projeto pelo terminal.

---

## Git init

**Inicializar um projeto git**<br>
O comando `git init` transforma uma pasta comum em um projeto versionado.

```bash
git init
```

Cria a pasta oculta `.git/`<br>
Passa a rastrear alterações <br>
Prepara o projeto para commits<br>

---

## Git status

**Visualizando os estados do projeto**<br>
O comando `git status` mostra como está o seu repositório neste momento.<br>
Em qual branch você está, quais arquivos foram modificados, quaiis estão prontos para commit e quais são novos (untrancked).<br>

```bash
git status
```

Conceito de estados dos arquivos no Git.

- `Untracked` (Não rastreado): Arquivo novo, que o Git ainda não está acompanhado. arquivo recém criado.
- `Tracked` (Rastreado): Arquivo que o Git já conhece (já foi adicionado e commitado alguma vez).
- `Modifield` (modificado): Arquivo rastreado que foi alterado após o último commit.
- `Staged` (Preparado para commit): Arquivo que já foi adicionado à área de stage e está pronto para commit.
- `Unmodified` (Sem alterações): Arquivo rasteado que nao sofreu alterações desde o último commit, pronto para o push.

Fluxo visual:

```txt
Untracked
  ↓ git add
Staged
  ↓ git commit
Unmodified
  ↓ editar arquivo
Modified
  ↓ git add
Staged
```

---

## Git add

**Adicionando arquivos**<br>
O comando `git add <arquivo.tipo>` move arquivos específicos para a área de `staged`, preparando-os para o commit.

```bash
git add package.jason
```

O comando `git add .` move todos os arquivos alterados no diretorio atual e subdiretórios.

```bash
git add .
```

O comando `git add -A` ou `git add --all` garante que o repositório fique 100% sincronizado.

```bash
git add -A
```

Ou

```bash
git add --all
```

---

## Git commit

**Salva no historioco**<br>
O comando `git commit` salva definitivamente no histórico do Git tudo o que está na área do `stage`.

```bash
git commit
```

Está opção abre o editor de texto para escrever a mensagem do commit, por padrao e usado o `vim`.

O comando `git commit -m "mensagem"` e a opção mais usada, ele permite escrever a mensagem do commit direto no mesmo comando.

```bash
git commit -m "meu primeiro commit"
```

O comando `git commit --amend` e usado para corrigir o ultimo commit.

```bash
git commit --amend
```

Se usar o `git commit --amend` após o `git push` o commit local não e mais o mesmo que esta no Github, os históricos ficam diferentes.

Ao tentar dar `git push` novamente, o Git bloqueia o push para evitar sobrescrever o histórico remoto. você pode resolver isso com o comando `git push --force`.

---

## Git Push

**Empurra para o repositorio remoto**<br>
O `git push` envia os commits locais para o repositorio remoto (ex: Github).

```bash
git push
```

Ou

```bash
git push origin main
```

Ou para definir a Upstream da branch, usado se for seu primeiro push.

```bash
git push -u origin main
```

**Origin**<br>
É o nome padrão do repositório remoto.<br>
A palavra `origin`, e o repositorio original do qual você clonou.

**Upstream**<br>
É a ligação entre sua branch local e remota.<br>
É importante defini-la no seu primeiro push.<br>
O comando a cima, aponta sua branch local `main` para a branch remota `origin/main` no Github.

```txt
SEU COMPUTADOR
└── main (local)
     ↓ upstream (git push -u origin main)/(git --set-upstream origin main)
GITHUB
└── origin/main

```

---

## Git branch

**Linhas independentes de desemvolvimento**<br>
Uma `branch` permite trabalhar em uma funcionalidade sem afetar o código principal.<br>
Você pode criar diferentes `branch` no seu projeto, para desemvolver diferentes funcinalidades.<br>
O comando `git branch` sem parametros, retorna uma lista de todas as `branch` locais.<br>
Ex:

```bash
git branch
```

saida:

```bash
* main
  feature-login
```

`*` indica a `branch` local.<br>

Usando o parametro `-r` Lista as branch remotas.<br>
Ja o parametro `-a` Lista as branch locais + remotas.

```bash
git branch -r
git branch -a
```

---

**Criar branch**<br>
O Comando `git branch nova-feature` cria uma nova branch chamada `nova-feature`, mas não troca para ela.<br>
Ex:

```bash
git branch nova-feature
```

O comando `git switch -c ` cria uma nova branch, e ja troca para ela. antigo: `git checkout -b `.<br>
Ex:

```bash
git switch -c <nova branch >
```

---

**Troca branch**<br>
O comando `git switch ` troca de branch.<br>
Ex:

```bash
git switch main
```

---

**Renomeia branch**<br>
O comando `git branch -m ` renomeia a branch atual.<br>
Ex:

```bash
git branch -m <novo nome >
```

se você não esta na branch que deseja renomear use `git branch -m nome-antigo novo-nome`.<br>
Ex:

```bash
git branch -m master main
```

trocou o nome da branch de `master` para `main`.

---

**Deletar branch**<br>
O comenado `git branch -d ` deleta a branch.<br>
Ex:

```bash
git branch -d feature-login
```

deletou a `branch` chamada `feature-login`

---

- [◀ Inicio](../README.md)
