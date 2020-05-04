var path = require("path");
var filepath = "./index.html"; // windows (ex) -> "C:\\\\sample\\index.html";  

console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));

console.log(path.join("./", "index.html"));

console.log(path.normalize("./index.html"));