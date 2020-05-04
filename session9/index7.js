//npm install iconv-lite@^0.4.24

const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

fs.readFileSync(path.join(__dirname, "sample-shiftjis.txt"), (err, data) => {
  console.log(iconv.decode(data, "shiftjis"));
});

fs.writeFileSync(path.join(__dirname, "sample-iconv-encode.txt"), iconv.encode("こんにちは","shiftjis") ,(err) => {
  if(err){
    console.log(err);
    return;
  }
  console.log("ok");
});

var reader = fs.createReadStream(path.join(__dirname, "sample-shiftjis.txt"));
var decoder = iconv.decodeStream("shiftjis");
reader.pipe(decoder);
decoder.on("data", (chunk) => {
  console.log(chunk);
});
reader.resume();

var encoder = iconv.encodeStream("shiftjis");
var writer = fs.createWriteStream(path.join(__dirname, "sample-iconv-encode-stream.txt"));
encoder.pipe(writer);
encoder.write("こんばんは");
encoder.end();