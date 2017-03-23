#streaTwitterRfo

## Install
* Install Node.js
* npm install

## App Twitter
* Criar [App no Twitter](https://apps.twitter.com/app/new)

## Configurar
* Preencher os dados no stream.js:
```
var client = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: ""
});
```

## Iniciar o servidor

```
node stream.js
```
