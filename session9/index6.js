//var randomstring = require("./randomstring");
//console.log(randomstring());

var CustomReader = require("./customreader");
var reader = new CustomReader();
reader.on("data", (chunk)=>{
  console.log(chunk);
});
reader.resume();