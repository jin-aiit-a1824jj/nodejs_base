const { Readable } = require("stream");
const randomstring = require("./randomstring");
const data = randomstring();

var CustomReader = class extends Readable {

  constructor(options){
    super(options || {encoding: "utf8"});
    this._current = 0;
  }

  _read(size) {
    var start = this._current;
    var end = start + size < data.length ? start + size : data.length;

    var chunk;

    try {
      chunk = data.slice(start, end);
    } catch (err) {
      process.nextTick(()=>{this.emit("error",err);});
      return;
    }

    this.push(chunk);

    if(start + size < data.length) {
      this._current = end;
    }else {
      this.push(null);
    }

  }
};

module.exports = CustomReader;
