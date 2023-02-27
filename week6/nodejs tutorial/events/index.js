const events = require("events");
const eventEmitter = new events.EventEmitter();

//// this fucntion will execute when the event gets fired i.e. event handler
function myEventHandler() {
  console.log("Wooho. I am riding horse...");
}

//// assigning the event handler
eventEmitter.on("scream", myEventHandler);

//// firing the event
eventEmitter.emit("scream");
