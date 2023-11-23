# Password Generator CLI

![GitHub repo size](https://img.shields.io/github/repo-size/SilvestreRenato/CLI-Password-Generator)

Este é um Gerador de Senhas de Linha de Comando (CLI) que permite gerar senhas seguras e aleatórias de acordo com suas preferências.

## Índice

- [Sobre](#sobre)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Opções](#opções)
- [Exemplos](#exemplos)
- [Licença](#licença)

## Sobre

Este CLI foi desenvolvido com Node.js e a biblioteca Commander para facilitar a geração de senhas seguras. Ele permite que você personalize o comprimento da senha e inclua números e caracteres especiais.

## Requisitos

- [Node.js](https://nodejs.org/) instalado na sua máquina.
- Instalar dependências:
```bash
npm install commander
```

## Instalação

Para usar o Password Generator CLI, você pode clonar este repositório e, em seguida, instalar as dependências com o seguinte comando:

```bash
npm install
```


## Uso

Para gerar uma senha, use o comando `generate` seguido de opções:

```bash
node app.js generate [opções]
```

## Opções

- `-l, --length <comprimento>: Especifique o comprimento da senha gerada (padrão: 12).`
- `-U, --no-uppercase: Exclua letras maiúsculas da senha.`
- `-L, --no-lowercase: Exclua letras minúsculas da senha.`
- `-N, --no-numbers: Exclua números da senha.`
- `-S, --no-special-chars: Exclua caracteres especiais da senha.`

## Exemplos

1. Gere uma senha padrão:
```bash
node index.js generate
```
2. Gerar uma senha com comprimento especificado::
```bash
node index.js generate -l 16
```
3. Gerar uma senha sem letras maiúsculas e caracteres especiais:
```bash
node index.js generate --no-uppercase --no-special-chars
```

## Observações
- O projeto é escrito em TypeScript e utiliza a biblioteca Commander para criar uma CLI amigável para geração de senhas.
- Personalize a geração de senhas usando várias opções para atender a requisitos específicos.
- Certifique-se de instalar as dependências antes de executar a CLI.