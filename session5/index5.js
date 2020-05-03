console.log(JSON.stringify(process.env, null, 2));

console.log("");
for (var i = 0; i < process.argv.length; i++){
  console.log(`${i} : ${process.argv[i]}`);
}

console.log("");
console.log(`cwd()    : ${process.cwd()}`);
console.log(`__dirname: ${__dirname}`);

console.log("");
console.log(process.platform);