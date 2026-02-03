# Testes Automatizados

## Jest

**Criar e executar testes com Jest**<br>
O `jest` e uma ferramenta criada para realizar testes automatizados em projetos `javascript`. <br>

Para instalar o `jest` como dependência de desemvolvimento.

```bash
npm install jest -D
```

Ele lista o `jest` no arquivo `package.json`.

```json
"scripts":{
  "dev": "next dev",
  "lint:check": "prettier --check .",
  "lint:fix" : "prettier --write .",
  *"test": "jest", //script para rodar o teste jest
  *"test:watch": "jest --watch" //script executa o teste jest de forma continua
}

"devDependencies": {
  *"jest": "^29.6.2", //dependencias de desenvolvimento Jest
  "prettier": "^3.x.x",

}
```

O `*` representa a linha que foi adicionada nesse exemplo.<br>
Os `scripts` devem ser adicionados manualmente.

---

- [◀ Inicio](../README.md)
