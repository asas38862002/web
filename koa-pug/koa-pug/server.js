var koa = require('koa');
var app = koa();
var url ;
// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  url = this.url ;
  console.log('%s %s - %s', this.method, this.url, ms);
  this.body = 'Hello World';
});

// response
/*
app.use(function *(){
  console.log('res '+ url);
  this.body = 'Hello World';
});*/

app.listen(3000);


const pug = require('pug');

// Compile template.pug, and render a set of data
console.log(pug.renderFile('template.pug', {
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"




