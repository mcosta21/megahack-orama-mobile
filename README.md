<p align="center">
<img src="https://github.com/mcosta21/megahack-orama-mobile/blob/main/docs/banner.png?raw=true" />
</p>

<p align="center">
  <a>
      <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mcosta21/megahack-orama-mobile?style=social" >
  </a>
  <a>
      <img alt="GitHub forks" src="https://img.shields.io/github/forks/mcosta21/megahack-orama-mobile?style=social" >
  </a>
  <a>
      <img alt="GitHub repo size"  src="https://img.shields.io/github/repo-size/mcosta21/megahack-orama-mobile"/>
  </a>

</p>

<h4 align="center">Esse é o aplicativo mobile desenvolvido para o desafio Órama durante a 5º edição do Mega Hack.</h4>

<h2></h2>

## Sobre o projeto

Esse projeto foi desenvolvido durante a 5ª edição do Mega Hack para o desafio da Órama. Ele se trata de um aplicativo de investimentos com uma cara mais amigável, que busca atrair a atenção de jovens investidores.

## Design

Gostou do design criado?! Fique a vontade para visualiza-lo no Figma.

<p align="center">
<a href="https://github.com/mcosta21/megahack-orama-server">
      <img alt="Server" width="220"  src="https://github.com/mcosta21/megahack-orama-mobile/blob/main/docs/button-entrar.png?raw=true"/>
</a>
</p>

## Tente você mesmo

### Pré-requisitos
Para rodar este projeto você precisará ter a disposição o terminal e ter instalado o [Node](https://nodejs.org/en/) e o [Expo](https://docs.expo.io).

#### Clonando o repositório

Após a clonagem do repositório, inicie o processo de instalação das dependências.

```
# Clone o repositório
$ git clone https://github.com/mcosta21/megahack-orama-mobile

# Acesse a pasta
$ cd megahack-orama-mobile

# Instale as dependências
$ npm install or yarn

```

#### Consumindo a API

Para que o aplicativo funcione corretamente, você irá da API desenvolvida junto ao desafio. 

<p align="center">
<a href="https://github.com/mcosta21/megahack-orama-server">
      <img alt="Server" width="220"  src="https://github.com/mcosta21/megahack-orama-mobile/blob/main/docs/button-entrar.png?raw=true"/>
</a>
</p>

Então, após ter acesso a mesma e seguir as instruções de instalação, siga as seguintes considerações:

> Acessando a pasta **src / services**, e custmizando o arquivo api.js

```javascript

// Altere o IP para o da sua máquina
const api = axios.create({
    baseURL: 'http://192.168.1.103:3333',
});
```

#### Iniciando aplicação

Por fim, basta iniciar o aplicativo com o seguinte comando.

```

# Inicie o servidor
$ npm start ou yarn start
```

## Tecnologias  🤖




<table style="width: 100% !important">
  <tr></tr>
  <td align="center">
  <p></p>
    <a href="https://reactnative.dev">
    <img src="https://cdn.auth0.com/blog/react-js/react.png" width="45"/>
    <p>React-Native</p>
    </a>
  </td>
  
  <td align="center">
   <p></p>
    <a href="https://expo.io">
    <img src="https://docs.expo.io/static/images/header/sdk.svg" width="50"/>
    <p>Expo</p>
    </a>
  </td>
  
  <td align="center">
   <p></p>
    <a href="https://reactnavigation.org">
    <img src="https://reactnavigation.org/img/spiro.svg" width="48"/>
    <p>React Navigation</p>
    </a>
  </td>
<table>

## Autores

Marcio Costa 

<table>
  <tr>
  <td>
  <a href="https://github.com/mcosta21/megahack-orama-server">
      <img alt="Server" width="50"  src="https://github.com/mcosta21/megahack-orama-mobile/blob/main/docs/image%202.png?raw=true"/>
</a>
  </td>
  <td>
  Marcio Costa
  </td>
  <td>
  <a href="https://www.linkedin.com/in/marcio-costa-03131a149/">LinkedIn</a>
  </td>
  <td>
  <a href="https://github.com/mcosta21">GitHub</a>
  </td>
  </tr>
</table>





Victor Ladeira 
- [LinkedIn](https://linkedin.com/in/ladeira1/)
- [GitHub](https://github.com/ladeira1)

Thiago Goulart
- [LinkedIn](https://www.linkedin.com/in/othiagogoulart/)
- [GitHub](https://github.com/thiagogoulart95)

Adriel Medeiros 
- [LinkedIn](https://www.linkedin.com/in/adriel-medeiros-a69b03128/)
- [GitHub](https://github.com/Adriel2105)
