//
console.log(__dirname);
console.log(__filename);

//
setTimeout( () => {
  console.log("setTimeout()");
}, 100);

console.log("global");

var end = (new Date()).getDate + 3000;
while((new Date()).getTime() < end){}