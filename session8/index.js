/*
var Clock = require("./clock");
var i = 0;
var clock = new Clock();
clock.on("tick", () => { 
  console.log(++i);
  if(i > 3) {
    clock.stop();
  }
});

clock.start();
*/

var EventEmitter = require("events");
var ee = new EventEmitter();

var ontick = function() {
  console.log("event is called.");
  ee.off("event", ontick);
};

ee.on("event", ontick);
ee.emit("event");
ee.emit("event");


var ontick2 = function() {
  console.log("event2 is called.");
  ee.off("event2", ontick2);
};
ee.once("event2", ontick2);
ee.emit("event2");
ee.emit("event2");


ee.on("event3", function(){
  console.log("function : \r\n", this);
});

ee.on("event3", ()=>{
  console.log("arrow : \r\n", this);
});

ee.emit("event3");