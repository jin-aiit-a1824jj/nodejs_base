//var randomstring = require("./randomstring");
//console.log(randomstring());

var CustomReader = require("./customreader");
var reader = new CustomReader();
reader.on("data", (chunk)=>{
  console.log(chunk);
});
reader.resume();

var CustomWritter = require("./customwriter");
var writer = new CustomWritter();
var reader2 = new CustomReader();
reader2.pipe(writer);
reader2.resume();