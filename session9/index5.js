var fs = require("fs");
var path = require("path");

//var writer = fs.createWriteStream(path.join(__dirname, "createdWS.txt"), "utf8");
//writer.end("Hello World!");

var reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
var writer = fs.createWriteStream(path.join(__dirname, "sample-copy-stream.txt"), "utf8");
reader.pipe(writer);
reader.resume();