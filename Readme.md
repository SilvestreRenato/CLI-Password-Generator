# Password Generator CLI

![GitHub](https://img.shields.io/github/license/SilvestreRenato/CLI-Password-Generator)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/SilvestreRenato/CLI-Password-Generator)
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

## Instalação

Para usar o Password Generator CLI, você pode clonar este repositório e, em seguida, instalar as dependências com o seguinte comando:

```bash
npm install
```

## Uso

Para gerar uma senha, use o comando generate seguido de opções:

```bash
node app.js generate [opções]
```

## Opções

- `-l, --length <length>: Define o comprimento da senha (padrão: 12).`
- `-n, --numbers: Inclui números na senha.`
- `-s, --special-chars: Inclui caracteres especiais na senha.`

## Exemplos

- `Gerar uma senha de 16 caracteres com números e caracteres especiais:`
```bash
node app.js generate -l 16 -n -s
```

- `Gerar uma senha de 8 caracteres sem números e caracteres especiais:`
```bash
node app.js generate -l 8
```