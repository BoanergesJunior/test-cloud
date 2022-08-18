# Implantação de Sistema Web em Nuvem
## Universidade Federal de Lavras
``` 
    Departamento de Ciência da Computação
    Computação em Nuvem - GCC180
```
### Integrantes
Boanerges Potyguara Saez Junior <br>
Walisson Mendes Ferreira


### Projeto
O trabalho foi desenvolvido para a disciplina de computação em nuvem. Foi solicitado a criação e hospedagem de uma API e um banco de dados em nuvem com o intuito de colocar em prática a teoria vista em sala de aula.

A API foi hospedada no Heroku, sistema esse que permite a hospedagem gratuita de apis e páginas web. O banco de dados foi alocado no mongo atlas, este que permite a alocação de banco de dados de forma gratuita.

### Url para acesso da api web
```
https://test-cloud-ufla.herokuapp.com/
```


## Rodando o projeto localmente

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Realizando o deploy no Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentação das ferramentas utilizadas

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
