var message = require("./modules");
console.log(message);

var {echo, area} = require("./methods");
echo("Hello World! 2");
console.log(area(10,5));

var Lamborghini = require("./lamborgini");
var car = new Lamborghini("lamborghini");
car.echo();
car.drive();

var config = require("./config");
console.log(JSON.stringify(config));

var a = require("./lib/module-a/index.js");
a();

var b = require("./lib/module-b/index");
b();