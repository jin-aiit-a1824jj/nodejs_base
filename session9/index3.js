var fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "sample.txt"), "utf8", (err, data)=>{
  if(err){
    console.log(err);
    return;
  }

  console.log(data);

  fs.writeFile(path.join(__dirname, "sample-copy-async1.txt"), data, "utf8", (err)=>{
    if(err){
      console.log(err);
      return;
    }
    console.log("ok");
  });

});

var util = require("util");
var readFile = util.promisify(fs.readFile);
var writeFile = util.promisify(fs.writeFile);

readFile(path.join(__dirname, "sample.txt"), "utf8")
.then((data)=>{{
  return writeFile(path.join(__dirname, "sample-copy-async2.txt"), data, "utf8")
}})
.then(()=>{
  console.log("ok");
})
.catch((err)=>{
  console.log(err.message);
});


(async function(){
  try {
    var data = await readFile(path.join(__dirname, "sample.txt"), "utf8");
    await writeFile(path.join(__dirname, "sample-copy-async3.txt"), data, "utf8");
    console.log("ok");
  } catch (err) {
    console.log(err.message);
  }
})();