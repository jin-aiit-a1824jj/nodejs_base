var fs = require("fs");
var path = require("path");

var data = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");
console.log(data);

fs.writeFileSync(path.join(__dirname,"sample-copy.txt"), data, "utf8");