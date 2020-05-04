process.on("message", (data) => {
  console.log(data);
});

setTimeout(() => {
  process.send({hello: "message from child."});
  process.exit(0);
}, 3000);