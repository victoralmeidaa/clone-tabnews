# Configurando o Editor

## .editorconfig

**Padronizando formato**<br>
O `.editorconfig` é um arquivo que padroniza a formatação do código entre diferentes editorese IDEs.<br>

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

Explicando linha por linha:

```ini
root = true
```

Diz que esse é o arquivo principal de config.

```ini
[*]
```

Aplica a config em todo os arquivos

```ini
charset = utf-8
```

Codificação padrão

```ini
indent_style = space
```

Usa espaço ao invés de tab

```ini
indent_size = 2
```

Usa 2 espaços por nivel

```ini
end_of_line = lf
```

Padrão Linux

```ini
insert_final_newline = true
```

Define uma linha em branco no final do arquivo

```ini
trim_trailing_whitespace = true
```

Remove espaço no final da linha

---

## Prettier

**Formatador automatico**<br>
O `Prettier` é um fomatador automático de codigo, para manter o padrão e legibilibade no projet.<br>

Para instalar o `Prettier` como dependência de desemvolvimento.

```bash
npm install prettier --save-dev

Ou

npm install prettier -D
```

Ele lista o `prettier` no arquivo `package.json`.

```json
"scripts":{
  "dev": "next dev",
  *"lint:check": "prettier --check .", //script para ler os arquivos
  *"lint:fix" : "prettier --write ."  //script para editar os arquivos
}

"devDependencies": {
  *"prettier": "^3.x.x" //dependencia de desenvolvimento Prettier
}
```

O `*` representa a linha que foi adicionada nesse exemplo.<br>
Os `scripts` devem ser adicionados manualmente.

---

- [◀ Inicio](../README.md)
