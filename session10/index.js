const { URL } = require("url");
var url = new URL("https://www.google.com");
console.log(url.protocol);
console.log(url.host);